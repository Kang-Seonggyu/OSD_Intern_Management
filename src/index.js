import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderContainer from "./Container/Common/HeaderContainer";
import BodyContainer from "./Container/Common/BodyContainer";
import FooterContainer from "./Container/Common/FooterContainer";

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <div className="internProjectPage">
        <HeaderContainer />
        <BodyContainer />
        <FooterContainer />
    </div>

);
