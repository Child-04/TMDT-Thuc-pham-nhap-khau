import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

