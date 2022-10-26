import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css'
import rootReducer from "./Components/modules/moduleIndex";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import {logger} from "redux-logger/src";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(thunk) )
); // 스토어 만들기

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <Provider store={store}>
        <div className="internProjectPage">
            <App />
        </div>
    </Provider>

);
