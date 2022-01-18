import { Provider } from "react-redux";
import AppRoute from "./AppRoute";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <AppRoute />
    </Provider>
  );
}

export default App;
