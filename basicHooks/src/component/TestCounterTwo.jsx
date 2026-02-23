import useCounter from "../hooks/useCounter";

export default function TestCounterTwo() {
  const { count, handleDecrement, handleIncrement, handleReset } =
    useCounter(5);

  return (
    <>
      <div>
        <button onClick={handleDecrement}>-</button>
        <div>{count}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleReset} style={{ background: "red" }}>
        reset
      </button>
    </>
  );
}
