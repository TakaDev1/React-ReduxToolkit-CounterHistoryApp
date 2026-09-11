import type { CounterType } from "../types/CounterType";
import { createSlice } from "@reduxjs/toolkit";

// 初期値の作成
const initialState: CounterType = { count: 0, history: [] };

// スライスの作成

const counterHistorySlice = createSlice({
  name: "counterHistory",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.history.unshift(state.count);
    },

    decrement: (state) => {
      state.count -= 1;
      state.history.unshift(state.count);
    },

    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { increment, decrement, clearHistory } = counterHistorySlice.actions;

export default counterHistorySlice.reducer;
