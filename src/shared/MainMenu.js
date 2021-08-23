import React from 'react';
import {Link} from "react-router-dom";

function MainMenu() {
    document.addEventListener('DOMContentLoaded', function(event) {
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the navbar
        let navbar = document.getElementById("navbar")

        // Get the content of page
        let content = document.getElementById("content")

        // Get the offset position of the navbar
        let sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position.
        // Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky")
                content.classList.add("sticky_inserted")
            } else {
                navbar.classList.remove("sticky");
                content.classList.remove("sticky_inserted")
            }
        }
    });

    return (
        <>
            <nav id="navbar" role="navigation">
                <Link to="/">
                    <span className="navigation-link">Strona główna</span>
                </Link>
                <Link to="/contact">
                    <span className="navigation-link">Kontakt</span>
                </Link>
                <Link to="/news">
                    <span className="navigation-link">Aktualności</span>
                </Link>
            </nav>
        </>
    );
}

export default MainMenu;