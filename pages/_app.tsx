import { ApolloProvider } from "@apollo/client";
import client from "~/apollo-client";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );

  export default MyApp;