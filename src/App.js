import "./App.css";
import Search from "./components/Search";
import Card from "./components/card/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Search />
        <Card />
      </QueryClientProvider>
    </div>
  );
}

export default App;
