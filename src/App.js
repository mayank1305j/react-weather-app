import "./App.css";
import Search from "./components/Search";
import Card from "./components/card/Card";
import Socials from "./components/Socials";
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
        <Socials />
        <a
          className="name"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
        >
          ©Mayank Joshi
        </a>
      </QueryClientProvider>
    </div>
  );
}

export default App;
