import React from 'react';
import MainMenu from "./MainMenu";

function Header() {
    return (
        <>
            <header className="header">
                <div id="main_content">
                    <div id="header_and_navbar">
                        <div id="header">
                            <p>HEADER IMAGE</p>
                        </div>
                        <MainMenu />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;