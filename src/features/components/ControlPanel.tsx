import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory, decrement, increment } from "../slices/CounterHistory";
import type { CounterType } from "../types/CounterType";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: CounterType) => state.count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(clearHistory())}>Reset</button>
    </div>
  );
};

export default ControlPanel;
