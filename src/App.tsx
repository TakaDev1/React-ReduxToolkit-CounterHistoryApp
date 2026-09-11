import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import ControlPanel from "./features/components/ControlPanel";
import ClearButton from "./features/components/ClearButton";
import CounterHistory from "./features/components/CounterHistory";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
        <h1>React-ReduxToolkit-CounterHistoryApp</h1>
        <Provider store={store}>
          <CounterHistory />
          <ClearButton />
          <ControlPanel />
        </Provider>
      </div>
    </>
  );
}

export default App;
