import { memo } from "react";
import { HeaderProps } from "../../types";
import { completedTodos, importantTodos } from "../../utils";
import useStyles from "./styles";

const Header: React.FC<HeaderProps> = ({ todos }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.title}>MY TODO LIST</div>
      <div className={classes.states}>
        <div> Done: {completedTodos(todos)?.length} </div>
        <div> Important: {importantTodos(todos)?.length} </div>
      </div>
    </header>
  );
};

export default memo(Header);
