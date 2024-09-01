import AddItem from './AddItem';
import { AddItemProps } from '../../types';
import useStyles from './styles';
import { memo } from 'react';

const Footer: React.FC<AddItemProps> = ({todos, setTodos}) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <AddItem todos={todos} setTodos={setTodos}/>
    </footer>
  );
};

export default memo(Footer);
