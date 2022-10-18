import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore ,combineReducers, applyMiddleware, compose } from 'redux';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducer';
import appSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootRecuer = combineReducers({appReducer});
const store = createStore(rootRecuer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const root = ReactDOM.createRoot(document.getElementById('root'));
sagaMiddleware.run(appSaga)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
