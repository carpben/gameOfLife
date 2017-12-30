import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import gameStore from './reducers'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


ReactDOM.render(
     <Provider store={store}>
         <AppContainer />
      </Provider>
      , document.getElementById('root')
);
registerServiceWorker();
