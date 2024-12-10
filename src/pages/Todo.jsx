import { useState, useEffect } from "react"; //agadi use vanney xa vaney teslai hooks vanxa
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";

const getValueFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos);
};
function Todo() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getValueFromLocalStorage);
  // const todos = ["Football", "Cricket", "Volleyballl"];
  // useEffect(() => {
  //   console.log("first useEffect");
  // }); //kunai pani state change huda run hunxa
  // useEffect(() => {
  //   console.log("second useEffect");
  // }, []); //initial render ma 1 time run hunxa tespaxi hudaina
  // useEffect(() => {
  //   console.log("third useEffect");
  // }, [newTodo]); //newTodo change huda run hunxa
  // useEffect(() => {
  //   console.log("fourth useEffect");
  // }, [todos]); //todos change huda run hunxa

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited == null) {
      todos.push(newTodo);
    } else {
      todos[indexToBeEdited] = newTodo;
    }
    setTodos([...todos]);
    setNewTodo("");
    setIndexToBeEdited(null);
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
    // newTodo = e.target.value;
  };
  const handleDelete = (toBeDeletedIndex) => {
    // const updatedTodos = [...todos];
    // updatedTodos.splice(toBeDeletedIndex, 1);
    const updatedTodos = todos.filter(
      (todo, index) => index !== toBeDeletedIndex
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input value={newTodo} type="text" onChange={handleChange} />
        <button type="submit">
          {indexToBeEdited == null ? "Add" : "Update"}
        </button>
      </form> */}
      <TodoForm
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        handleChange={handleChange}
        indexToBeEdited={indexToBeEdited}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        setIndexToBeEdited={setIndexToBeEdited}
        setNewTodo={setNewTodo}
      />
      {/* <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
              <Button
                variant="danger"
                title="delete"
                handleClick={() => {
                  handleDelete(index);
                }}
              />
              <button
                onClick={() => {
                  setIndexToBeEdited(index);
                  setNewTodo(todos[index]);
                }}
              >
                Edit
              </button>
              <Button
                title="Edit"
                handleClick={() => {
                  setIndexToBeEdited(index);
                  setNewTodo(todos[index]);
                }}
              />
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
export default Todo;
