import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Example from './components/container/Example.jsx';
import reducer from './reducers';
import ItemLister from './components/container/ItemLister.jsx';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <div>
    <h1>React Redux Thunk Example</h1>
    <p>
      This is an example of using Async Actions with the <strong>redux-thunk</strong> module.
    </p>
    <Provider store={store}>
      <Example />
      <ItemLister/>
    </Provider>
  </div>,
  document.querySelector('main')
);
