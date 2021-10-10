import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {RepositoryProvider} from "contexts/RepositoryProvider";

import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RepositoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RepositoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);