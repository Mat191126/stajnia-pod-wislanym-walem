import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";

function MainMenu() {
    document.addEventListener('DOMContentLoaded', function(event) {
        // Get the navbar
        let navbar = document.getElementById("navbar");

        //Get the logo
        let logo = document.getElementById("logo-image");

        // Get the offset position of the navbar
        let navbarOffsetTop = navbar.offsetTop;

        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Add the sticky class to the navbar when you reach its scroll position.
        // Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.innerWidth > 845) {
                if (window.pageYOffset >= navbarOffsetTop) {
                    navbar.classList.add("sticky")
                    navbar.style.marginTop = "0em";
                    logo.style.marginTop = "5.5em";
                    logo.style.borderRadius = "60% 60% 100% 100%";
                    navbar.style.boxShadow = "-1px 10px 5px black";
                } else {
                    navbar.classList.remove("sticky");
                    navbar.style.marginTop = "-2.7em";
                    logo.style.marginTop = "-0.5em";
                    logo.style.borderRadius = "100% 100% 60% 60%";
                    navbar.style.boxShadow = "-1px -3px 5px black, -1px 10px 5px black";
                }
            }
        }
    });

    return (
        <>
            <nav id="navbar" role="navigation">
                <div id="left-side-menu">
                    <Link to="/about-us">
                        <span className="navigation-link">O nas</span>
                    </Link>
                    <Link to="/news">
                        <span className="navigation-link">Aktualności</span>
                    </Link>
                    <Link to="/gallery">
                        <span className="navigation-link">Galeria</span>
                    </Link>
                </div>
                <div id="center-menu">
                    <Link id="logo" to='/'>
                        <img id='logo-image' src={logo} alt=""/>
                    </Link>
                </div>
                <div id="right-side-menu">
                    <Link to="/prices">
                        <span className="navigation-link">Cennik</span>
                    </Link>
                    <Link to="/regulations">
                        <span className="navigation-link">Regulamin</span>
                    </Link>
                    <Link to="/contact">
                        <span className="navigation-link">Kontakt</span>
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
                            <Link to="/about-us">
                                <span className="navigation-link">O nas</span>
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
                        <li>
                            <Link to="/prices">
                                <span className="navigation-link">Cennik</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/regulations">
                                <span className="navigation-link">Regulamin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span className="navigation-link">Kontakt</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default MainMenu;