import { getLibrary } from "../config/web3";
import { Web3ReactProvider } from "@web3-react/core";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import "../styles/globals.css";

const SERVER_URI = "http://localhost:4000"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${SERVER_URI}`,
  }),
});

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
