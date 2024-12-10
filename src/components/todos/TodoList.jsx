import Button from "../Button";
function TodoList({ todos, handleDelete, setIndexToBeEdited, setNewTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}{" "}
            <Button
              variant="danger"
              title="delete"
              handleClick={() => {
                handleDelete(index);
              }}
            />
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
    </ul>
  );
}
export default TodoList;
