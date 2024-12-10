import { useState, useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { state: "success", errorMsg: "", data: action.payload };
    case "error":
      return { state: "error", errorMsg: action.payload, data: [] };
  }
}
export function useQuery(url) {
  const [{ state, errorMsg, data }, dispatch] = useReducer(reducer, {
    state: "loading",
    data: [],
    errorMsg: "",
  });
  // const [state, setState] = useState("loading");
  // const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState([]);
  //useEffect le function return garxa , async banayo vaney promise return garxa so error auxa
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setData(data);
        // setState("success");
        dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        // setState("error");
        // setErrorMsg(err.message);
        dispatch({ type: "error", payload: err.message });
      });
  }, []);
  return {
    state,
    data,
    errorMsg,
  };
}
