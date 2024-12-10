// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [indexToBeEdited, setIndexToBeEdited] = useState(null);
//   const [newTodo, setNewTodo] = useState("");
//   const [todos, setTodos] = useState(["Football", "Cricket", "Volleyballl"]);
//   // const todos = ["football", "cricker", "Volleyballl"];

//   const handleAdd = () => {
//     if (indexToBeEdited == null) {
//       todos.push(newTodo);
//     } else {
//       todos[indexToBeEdited] = newTodo;
//     }
//     setTodos([...todos]);
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
//       <input value={newTodo} type="text" onChange={handleChange} />
//       <button onClick={handleAdd}>
//         {indexToBeEdited == null ? "Add" : "Update"}
//       </button>

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
