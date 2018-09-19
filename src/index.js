import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import RootReducer from "./reducers/rootReducer"

import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);

export const store = createStore(
    RootReducer,
    composeWithDevTools(middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();