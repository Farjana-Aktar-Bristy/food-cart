import React from 'react';
import {Col, Navbar, Row} from "react-bootstrap";

const NavBar = (props) => {
    return (
        <Row className="navigation-bar">
            <Col lg={3} md={3} className="navigation-bar-brand">
                <Navbar expand="lg">
                    <Row>
                        <Col lg={2} md={2}><div className="logo">G</div></Col>
                        <Col lg={10} md={10}><Navbar.Brand href="/">CRUD Food</Navbar.Brand></Col>
                    </Row>
                </Navbar>
            </Col>
            <Col lg={9} md={9}>
                {props.children}
            </Col>
        </Row>
    );
};

export default NavBar;