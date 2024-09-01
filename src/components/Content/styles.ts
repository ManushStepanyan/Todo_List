import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contentContainer: {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "600px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  todoListContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "450px",
    overflowX: "hidden",
  },
  searchInputContainer: {
    display: "flex",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  todoText: {
    flex: 1,
    marginRight: "10px",
  },
  completed: {
    textDecoration: "line-through",
    color: "#888",
  },
  important: {
    fontWeight: "bold",
    color: "#b00",
  },
  editButton: {
    background: "transparent",
    border: "1px solid black",
    cursor: "pointer",
    color: "#007bff",
  },
  toggleButton: {
    background: "transparent",
    border: "1px solid black",
    cursor: "pointer",
  },
  deleteButton: {
    background: "transparent",
    border: "1px solid black",
    cursor: "pointer",
  },
  importantButton: {
    background: "transparent",
    border: "1px solid black",
    cursor: "pointer",
  },
  editContainer: {
    display: "flex",
    alignItems: "center",
  },
  editInput: {
    marginRight: "10px",
    padding: "5px",
  },
  saveCancelButtons: {
    marginLeft: "5px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    border: "none",
    padding: "6px",
    color: "#fff",
  },
  searchButtons: {
    display: "flex",
    height: "40px",
  },
  allButton: {
    backgroundColor: "#3c3c94",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
  doneButton: {
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
  searchImportantButton: {
    backgroundColor: "#b00",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
});

export default useStyles;
