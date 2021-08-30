import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function MainMenu() {
    document.addEventListener('DOMContentLoaded', function(event) {
        // Get the navbar
        let navbar = document.getElementById("navbar");

        //Get the logo
        let logo = document.getElementById("logo");

        // Get the offset position of the navbar
        let navbarOffsetTop = navbar.offsetTop;

        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Add the sticky class to the navbar when you reach its scroll position.
        // Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.innerWidth > 845) {
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
                    <img src={logo} id="logo" alt=""/>
                </div>
                <div id="right-side-menu">
                    <Link to="/gallery">
                        <span className="navigation-link">Galeria</span>
                    </Link>
                </div>
            </nav>
            <nav id="hamburger_menu" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span className="hamburger_part"></span>
                    <span className="hamburger_part"></span>
                    <span className="hamburger_part"></span>

                    <ul id="menu">
                        <li>
                            <Link to="/">
                                <span className="navigation-link">Strona główna</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span className="navigation-link">Kontakt</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                <span className="navigation-link">Aktualności</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery">
                                <span className="navigation-link">Galeria</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default MainMenu;