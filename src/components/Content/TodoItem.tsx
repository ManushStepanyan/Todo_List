import { memo, useState, useMemo } from "react";
import { TodoItemProps } from "../../types";
import useStyles from "./styles";
import {
  IoIosInformation,
  IoIosCheckmark,
  IoIosTrash,
  IoMdCreate,
} from "react-icons/io";

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  onMark,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const classes = useStyles();

  const handleSave = async () => {
    if (!editValue.trim()) return;
    onEdit({ ...todo, title: editValue });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  const operationButtonsConfigs = useMemo(
    () => [
      {
        title: "Edit",
        className: classes.editButton,
        onClick: () => setIsEditing(true),
        icon: <IoMdCreate size="25px" />,
      },
      {
        title: "Check",
        className: classes.toggleButton,
        onClick: () => onToggle(todo),
        icon: <IoIosCheckmark size="25px" color="#28a745" />,
      },
      {
        title: "Mark",
        className: classes.importantButton,
        onClick: () => onMark(todo),
        icon: <IoIosInformation size="25px" />,
      },
      {
        title: "Delete",
        className: classes.deleteButton,
        onClick: () => onDelete(todo.id),
        icon: <IoIosTrash size="25px" color='#b00' />,
      },
    ],
    [classes, setIsEditing, onToggle, onMark, onDelete, todo]
  );

  const saveCancelButtonsConfigs = useMemo(
    () => [
      {
        label: "Save",
        onClick: handleSave,
      },
      {
        label: "Cancel",
        onClick: handleCancel,
      },
    ],
    [handleSave, handleCancel]
  );

  return (
    <div className={classes.todoItem}>
      {isEditing ? (
        <div className={classes.editContainer}>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
            className={classes.editInput}
          />
          {saveCancelButtonsConfigs.map((config, index) => (
            <button
              key={index}
              onClick={config.onClick}
              className={classes.saveCancelButtons}
            >
              {config.label}
            </button>
          ))}
        </div>
      ) : (
        <>
          <span
            className={`${classes.todoText} ${
              todo.completed ? classes.completed : ""
            } ${todo.important ? classes.important : ""}`}
          >
            {todo.title}
          </span>
          {operationButtonsConfigs.map((config) => (
            <button
              key={config.title}
              className={config.className}
              onClick={config.onClick}
            >
              {config.icon}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default memo(TodoItem);
