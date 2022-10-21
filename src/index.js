import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css'
import rootReducer from "./Components/modules/moduleIndex";
import { createStore } from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer); // 스토어 만들기

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <Provider store={store}>
        <div className="internProjectPage">
            <App />
        </div>
    </Provider>

);
