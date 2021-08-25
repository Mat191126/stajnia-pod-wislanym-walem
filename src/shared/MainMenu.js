import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";

function MainMenu() {
    document.addEventListener('DOMContentLoaded', function(event) {
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the navbar
        let navbar = document.getElementById("navbar");

        //Get the logo
        let logo = document.getElementById("logo");

        // Get the offset position of the navbar
        let navbarOffsetTop = navbar.offsetTop;

        //let logoOffsetBottom = logo.offsetTop + logo.offsetHeight;

        // Add the sticky class to the navbar when you reach its scroll position.
        // Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > navbarOffsetTop + 80) {
                navbar.classList.add("sticky")
                navbar.style.marginTop = "0em";
                logo.style.marginTop = "8.5em";
                logo.style.borderRadius = "60% 60% 100% 100%";
            } else {
                navbar.classList.remove("sticky");
                navbar.style.marginTop = "-3em";
                logo.style.marginTop = "-0.5em";
                logo.style.borderRadius = "100% 100% 60% 60%";
            }
        }
    });

    return (
        <>
            <nav id="navbar" role="navigation">
                <div id="left-side-menu">
                    <Link to="/">
                        <span className="navigation-link">Strona główna</span>
                    </Link>
                    <Link to="/contact">
                        <span className="navigation-link">Kontakt</span>
                    </Link>
                    <Link to="/news">
                        <span className="navigation-link">Aktualności</span>
                    </Link>
                </div>
                <div id="center-menu">
                    <img src={logo} id="logo"/>
                </div>
                <div id="right-side-menu">
                    <Link to="/gallery">
                        <span className="navigation-link">Galeria</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default MainMenu;