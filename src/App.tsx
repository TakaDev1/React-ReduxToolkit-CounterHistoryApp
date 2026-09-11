import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import ControlPanel from "./features/components/ControlPanel";

function App() {
  return (
    <>
      <div>
        <h1>React-ReduxToolkit-CounterHistoryApp</h1>
        <Provider store={store}>
          <div>
            <ControlPanel />
          </div>
        </Provider>
      </div>
    </>
  );
}

export default App;
