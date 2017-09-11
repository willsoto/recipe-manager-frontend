import axios from 'axios';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

export const Api = axios.create({
  baseURL: '/api'
});

export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/api/graphql',
    transportBatching: true,
    // These options get passed to `fetch`
    // We need to make sure the session cookie gets sent with every request
    opts: {
      credentials: 'same-origin'
    }
  }),
  connectToDevTools: true
});
