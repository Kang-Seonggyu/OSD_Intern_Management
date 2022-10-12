import '../../index.css'
import React from "react";
import styled from "styled-components";

const FullscreenDark = styled.div`
    position: fixed;
    top : 0;
    display: block;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    z-index:1;
`

function DarkMode() {
    return(
        <FullscreenDark />
    )
}

export default DarkMode;