import React from "react";
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    split,
} from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/',
    options: {
      reconnect: true
    },
});

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/'
})

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

