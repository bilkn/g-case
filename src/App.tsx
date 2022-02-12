import { Provider } from "react-redux";
import AppRoute from "./AppRoute";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

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
