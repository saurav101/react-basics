// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const todoInputRef = useRef(null); //document.getElementById('input')//useRef() ma kunai value change garda re-render hudaina&&dom element ko ref chaiyeko bela use garney
//   const [indexToBeEdited, setIndexToBeEdited] = useState(null);
//   const [newTodo, setNewTodo] = useState(""); //useState ma re-render hunxa
//   const [todos, setTodos] = useState(["Football", "Cricket", "Volleyballl"]);
//   // const todos = ["football", "cricker", "Volleyballl"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const todo = todoInputRef.current.value;
//     if (indexToBeEdited == null) {
//       todos.push(todo);
//     } else {
//       todos[indexToBeEdited] = newTodo;
//     }
//     setTodos([...todos]);
//     todoInputRef.current.value = "";
//     setNewTodo("");
//     setIndexToBeEdited(null);
//   };
//   // const handleDelete = (toBeDeletedIndex) => {
//   //   const updatedTodos = todos.filter(
//   //     (todo, index) => index !== toBeDeletedIndex
//   //   );
//   //   setTodos(updatedTodos);
//   // };
//   const handleDelete = (toBeDeletedIndex) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(toBeDeletedIndex, 1);
//     setTodos(updatedTodos);
//   };

//   const handleChange = (e) => {
//     setNewTodo(e.target.value);
//     // newTodo = e.target.value;
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input ref={todoInputRef} type="text" />
//         <button type="submit">
//           {indexToBeEdited == null ? "Add" : "Update"}
//         </button>
//       </form>

//       <ul>
//         {todos.map((todo, index) => {
//           return (
//             <li key={index}>
//               {todo}
//               <button
//                 onClick={() => {
//                   handleDelete(index);
//                 }}
//               >
//                 delete
//               </button>
//               <button
//                 onClick={() => {
//                   setIndexToBeEdited(index);
//                   setNewTodo(todos[index]);
//                 }}
//               >
//                 Edit
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }
// export default App;
