import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Body from "./Body";

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <div>
        <Header />
        <Body />
    </div>

);
