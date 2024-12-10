// import { useState, useEffect } from "react";
import { useContext } from "react";
import { useQuery } from "../hooks/useQuery";
import { UserContext, useUser } from "../App";
// function useQuery() {
//   const [state, setState] = useState("loading");
//   const [users, setUsers] = useState([]);
//   const [errorMsg, setErrorMsg] = useState([]);
//   //useEffect le function return garxa , async banayo vaney promise return garxa so error auxa
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setState("success");
//       })
//       .catch((err) => {
//         setState("error");
//         setErrorMsg(err.message);
//       });
//   }, []);
//   return { state, users, errorMsg };
// }
function ActionButtons() {
  const user = useUser();
  // const user = useContext(UserContext);
  return (
    <>
      {user.role.includes("admin") && (
        <>
          {" "}
          <button>edit</button>
          <button>delete</button>
        </>
      )}
      {user.role.includes("customer") && <button>view</button>}
    </>
  );
}
export function Users() {
  const {
    state,
    data: users,
    errorMsg,
  } = useQuery("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <h2>Users:</h2>
      {state === "loading" && <p>loading</p>}
      {state === "error" && <p>{errorMsg}</p>}
      {state === "success" && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>
              {" "}
              {name} <ActionButtons />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
