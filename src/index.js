import React from 'react';
import ReactDOM from 'react-dom/client';




import {Provider} from 'react-redux';
import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


import App from './App';


const store =legacy_createStore(reducers , compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store} > <App /> </Provider>
    
  </React.StrictMode>
);