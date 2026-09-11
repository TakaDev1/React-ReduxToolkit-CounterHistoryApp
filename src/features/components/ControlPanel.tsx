import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory, decrement, increment } from "../slices/CounterHistory";
import type { CounterType } from "../types/CounterType";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: CounterType) => state.count);

  return (
    <div>
      <p className="text-3xl text-white">Count: {count}</p>
      <div className="mt-10 flex justify-around">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-200 text-black w-10 py-1 font-bold rounded-xl cursor-pointer hover:opacity-80"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-200 text-black w-10 py-1 font-bold rounded-xl cursor-pointer hover:opacity-80"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
