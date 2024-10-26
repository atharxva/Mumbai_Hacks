import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">SafeSpace</a>{" "}
                {/* Replace with your app's name if needed */}
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/emergency">Emergency</a>
                </li>
                <li>
                    <a href="/tips">Safety Tips</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
