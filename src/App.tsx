import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Event from "../src/pages/Event";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
