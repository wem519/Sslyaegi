import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InmemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "",
    cache: new InmemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
