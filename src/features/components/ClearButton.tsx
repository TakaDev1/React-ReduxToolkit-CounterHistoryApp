import React from "react";
import { useDispatch } from "react-redux";
import { clearHistory } from "../slices/CounterHistory";

const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(clearHistory())}
        className="bg-gray-500 text-white cursor-pointer hover:opacity-80 px-20 py-2 rounded-xl mb-10 font-bold"
      >
        リセット
      </button>
    </div>
  );
};

export default ClearButton;
