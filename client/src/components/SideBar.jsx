import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar min-vh-100">
            <p>Menu</p>
            <Nav className="flex-column">
                <Link to="/create"> <i className="bi bi-cart-dash-fill"/> Create Food</Link>
                <Link to="/"> <i className="bi bi-card-list"/> All Foods </Link>
            </Nav>
        </div>
);
};

export default SideBar;