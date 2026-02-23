
import useCounter from "../hooks/useCounter";
export default function TestCounter() {
const {count,handleDecrement,handleIncrement,handleReset} = useCounter(0)

  return (
    <>
      <div>
        <button onClick={handleDecrement}>decrement</button>
        <div>{count}</div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={handleReset} style={{ background: "red" }}>
        reset
      </button>
    </>
  );
}
