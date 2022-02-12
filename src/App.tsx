import { Provider } from "react-redux";
import AppRoute from "./AppRoute";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
