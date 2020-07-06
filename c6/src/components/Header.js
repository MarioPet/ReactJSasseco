import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Point A</NavLink></li>
                <li><NavLink to="/point-b">Point B</NavLink></li>
                <li><NavLink to="/point-c">Point C</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;