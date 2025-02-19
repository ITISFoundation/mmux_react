import React, { useState } from 'react';
// import './Header.css';

function Header(props) {
    return (
        <header className="Header">
            <h1>MMUX  -  {props.customText}</h1>
        </header>
    );
};

export default Header;