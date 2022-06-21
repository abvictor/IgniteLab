import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4om4wc30gbl01z40q7f7hr8/master",
  cache: new InMemoryCache(),
});
