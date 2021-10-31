import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import {reportWebVitals} from "./reportWebVitals";
import Counter from "./utils/Counter.js";

import store from './store'

import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === "production") {
  reportWebVitals(({name, value}) => {
    return Counter.send(name, Math.round(value));
  })
}

Counter.send('connect', performance.timing.connectEnd - performance.timing.connectStart);