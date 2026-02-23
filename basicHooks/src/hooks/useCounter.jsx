import { useState } from "react";

function useCounter( initailState ) {
  const [count, setCount] = useState(initailState);


  function handleIncrement() {
    setCount((prev) => prev + 1);
    // alert("count incremented");
  }
  function handleDecrement() {
    setCount((prev) => prev - 1);
    // alert("count decremented");
  }
  function handleReset() {
    setCount(0);
  }
  return {count, handleIncrement, handleDecrement, handleReset};
}

export default useCounter;
