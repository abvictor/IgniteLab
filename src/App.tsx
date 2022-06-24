import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Event from "../src/pages/Event";
import { client } from "./lib/apollo";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Event />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
