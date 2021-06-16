import React from "react";
import fetch from 'cross-fetch';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import Country from './components/Country';
import Continent from './components/Continent';

const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com', fetch
});

export const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <div className="App">
      <Country />
      <Continent />
    </div>
  )
}

export default App;