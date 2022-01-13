import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Planets from './Components/Planets';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://enabling-deer-37.hasura.app/v1/graphql',
  })
});

const App = () => (
  <ApolloProvider client={client}>
    <Planets />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
