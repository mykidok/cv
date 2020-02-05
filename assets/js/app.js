import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { createStore, combineReducers } from 'redux'
import lineReducer from './reducers/linesReducer'
import {Provider} from "react-redux";

import '../css/app.scss';

const store = createStore(combineReducers({ lines: lineReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
