import React from "react";
import { useSelector } from "react-redux";
import type { CounterType } from "../types/CounterType";

const CounterHistory = () => {
  const state = useSelector((state: CounterType) => state.history);
  return (
    <div className="my-10 bg-blue-400 w-1/2 py-10 rounded-lg">
      {state.length > 0 ? (
        <ul>
          {state.map((elem) => (
            <li className="text-black font-bold">{elem}</li>
          ))}
        </ul>
      ) : (
        <p className="text-white">履歴がありません</p>
      )}
    </div>
  );
};

export default CounterHistory;
