import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderContainer from "./Container/Common/HeaderContainer";
import BodyContainer from "./Container/Common/BodyContainer";
import FooterContainer from "./Container/Common/FooterContainer";
import NaviContainer from "./Container/Common/NaviContainer";

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <div className="internProjectPage">
        <HeaderContainer />
        <BodyContainer />
        <NaviContainer />
        <FooterContainer />
    </div>

);
