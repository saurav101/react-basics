import { createContext, useContext, useState } from "react";
import Posts from "./pages/Posts";
import { Users } from "./pages/Users";
import CounterReducer from "./pages/CounterReducer";

export const UserContext = createContext(null);
export function useUser() {
  return useContext(UserContext);
}

function App() {
  const [user, setUser] = useState({
    name: "Saurav",
    role: ["admin", "customer"],
  });
  return (
    <>
      <UserContext.Provider value={user}>
        {/* <Users />
        <Posts /> */}
      </UserContext.Provider>
      <CounterReducer />
    </>
  );
}
export default App;
