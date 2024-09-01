import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    backgroundColor: '#3c3c94',
    color: '#fff',
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  states: {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: '12px',
    gap: '16px',
  },
});

export default useStyles;
