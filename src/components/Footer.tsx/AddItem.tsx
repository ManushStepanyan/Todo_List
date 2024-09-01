import React, { useState } from "react";
import { addTodo } from "../../services/todoService";
import { AddItemProps } from "../../types";
import useStyles from "./styles";

const AddItem: React.FC<AddItemProps> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const classes = useStyles();

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    const todo = await addTodo(newTodo);
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  return (
    <div className={classes.addForm}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
        placeholder="Item text..."
        className={classes.input}
      />
      <button onClick={handleAddTodo} className={classes.addButton}>
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
