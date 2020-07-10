import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul style={{display: 'flex', listStyle: 'none', width: '100%', justifyContent: 'space-evenly'}}>
                <li><NavLink to="/">Point A</NavLink></li>
                <li><NavLink to="/point-b">Point B</NavLink></li>
                <li><NavLink to="/point-c">Point C</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/point-e">Point E</NavLink></li>
                <li><NavLink to="/forecast">Forecast</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;