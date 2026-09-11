import React from "react";
import { useDispatch } from "react-redux";
import { clearHistory } from "../slices/CounterHistory";

const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(clearHistory())}>リセット</button>
    </div>
  );
};

export default ClearButton;
