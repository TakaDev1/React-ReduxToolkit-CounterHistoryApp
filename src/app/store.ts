import { configureStore } from "@reduxjs/toolkit";
import counterHistoryReducer from "../features/slices/CounterHistory";

const store = configureStore({
  reducer: counterHistoryReducer,
});

export default store;
