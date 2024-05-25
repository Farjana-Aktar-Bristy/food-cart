import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import SideBar from "../SideBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import FoodList from "../FoodList.jsx";

const MasterLayout = (props) => {
    return (
        <Container fluid>
            <NavBar/>
            <Row>
                <Col lg={3} md={3} className="sidebar">
                    <SideBar/>
                </Col>
                <Col lg={9} md={9}>
                    {props.children}
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default MasterLayout;