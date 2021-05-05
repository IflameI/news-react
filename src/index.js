import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

// Баг с картинкой
// Menu burger
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
