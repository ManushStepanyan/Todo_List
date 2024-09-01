import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    borderTop: "1px solid #ddd",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  addForm: {
    display: "flex",
    minWidth: '500px',
    margin: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px 0 0 4px",
    outline: "none",
  },
  addButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "0 4px 4px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
});

export default useStyles;
