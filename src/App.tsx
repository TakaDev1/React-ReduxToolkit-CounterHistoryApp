import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import ControlPanel from "./features/components/ControlPanel";
import ClearButton from "./features/components/ClearButton";
import CounterHistory from "./features/components/CounterHistory";

function App() {
  return (
    <>
      <div>
        <h1>React-ReduxToolkit-CounterHistoryApp</h1>
        <Provider store={store}>
          <div>
            <CounterHistory />
            <ClearButton />
            <ControlPanel />
          </div>
        </Provider>
      </div>
    </>
  );
}

export default App;
