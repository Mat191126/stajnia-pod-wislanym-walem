import React from 'react';
import MainMenu from "./MainMenu";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
            <header className="header_content">
                <div id="header_and_navbar">
                    <div id="header">
                        <img id="logo" src={logo}/>
                        <h1 id="header_text">STAJNIA POD <br/> WIŚLANYM WAŁEM</h1>
                    </div>
                    <MainMenu />
                </div>
            </header>
        </>
    );
}

export default Header;