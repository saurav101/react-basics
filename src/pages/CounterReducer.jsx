import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import "../App.css";

const calculateFactorial = (n) => {
  // console.log("factorial called");
  if (n == 0) return 0;
  if (n == 1) return 1;
  return n * calculateFactorial(n - 1);
};
function reducer(state, action) {
  //   if (action == "increment") return state + 1;
  //   if (action == "decrement") return state - 1;
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}
function DisplayValue({ value }) {
  // console.log("display value");
  useEffect(() => {
    return () => {
      // console.log("cleanup function called");
    };
  }, []);
  return <h1>{value}</h1>;
}
function InputValue({ value, handleChange }) {
  // console.log("inputvalue component");
  return <input type="text" value={value} onChange={handleChange} />;
}
const InputValueMemoized = memo(InputValue);
const DisplayValueMemoized = memo(DisplayValue);

function CounterReducer() {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  useEffect(() => {
    return () => {
      console.log("cleanup function of counter", state.count);
    };
  }, [state.count]);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
    //[state.count] is dependency array ,calculatefactorial depends upon it and aru state ma ni depend huney vako vaye [state.count,another state] ni lekhthim
  );
  return (
    <>
      {state.count < 2 && <DisplayValueMemoized value={value} />}
      <InputValueMemoized value={value} handleChange={handleChange} />
      {/* <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      /> */}
      <p>
        {state.count >= 10 ? "cannot increase more than 10" : ""}
        <button
          disabled={true ? state.count >= 10 : state.count}
          onClick={handleIncrement}
        >
          +
        </button>
        {state.count}
        <button disabled={state.count <= -10} onClick={handleDecrement}>
          -
        </button>
        {state.count <= -10 ? "cannot decrease less than -10" : ""}
      </p>
      <p>
        Factorial of {state.count} is {factorial}
      </p>
    </>
  );
}
export default CounterReducer;
