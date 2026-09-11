import React from "react";
import { useSelector } from "react-redux";
import type { CounterType } from "../types/CounterType";

const CounterHistory = () => {
  const state = useSelector((state: CounterType) => state.history);
  return (
    <div>
      {state.length > 0 ? (
        <ul>
          {state.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      ) : (
        <p>履歴がありません</p>
      )}
    </div>
  );
};

export default CounterHistory;
