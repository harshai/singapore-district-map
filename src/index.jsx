import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './App';
// import './styles/main.scss';

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
