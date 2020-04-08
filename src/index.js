import React from 'react';
import ReactDOM from 'react-dom';
import {GraphQLClient, ClientContext} from 'graphql-hooks';

import App from './components/App';
import './styles/global.css';
import detectIE from './utils/detectInternetExplorer.js';

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: process.env.REACT_APP_DATO_CMS_API_TOKEN,
  },
});

detectIE();
ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById('root')
);
