import { useState } from "react";
import "../App.css";

function Counter() {
  // let count=0;
  let [count, setCount] = useState(0); //[0,()=>{}]
  const handleIncrement = () => {
    // count=count+1; wrong method
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleDecrement = () => {
    // count=count-1; wrong method
    // setCount(count - 1);
    setCount((prev) => {
      return prev - 1;
    });
  };
  console.log(count);
  console.log("App function called(re-render)");
  return (
    <>
      <p>
        {count >= 10 ? "cannot increase more than 10" : ""}
        <button disabled={true ? count >= 10 : count} onClick={handleIncrement}>
          +
        </button>
        {count}
        {/* javascript use garna paryo vaney {} vitra lekhney */}
        <button disabled={count <= -10} onClick={handleDecrement}>
          -
        </button>
        {count <= -10 ? "cannot decrease less than -10" : ""}
      </p>
    </>
  );
}
export default Counter;
