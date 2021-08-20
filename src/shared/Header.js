import React from 'react';
import MainMenu from "./MainMenu";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
            <header className="header">
                <div id="header_content">
                    <div id="header_and_navbar">
                        <div id="header">
                            <img id="logo" src={logo} alt="logo image"/>
                            <p>STAJNIA POD <br/> WIŚLANYM WAŁEM</p>
                        </div>
                        <MainMenu />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;