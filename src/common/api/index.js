import axios from 'axios';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

export const Api = axios.create({
  baseURL: '/api'
});

export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/api/graphql',
    transportBatching: true
  })
});
