import React, {useState} from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateFoodForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [food, setFood] = useState({
        name:"",
        code:"",
        image:"",
        category:"",
        quantity:"",
        price:""
    });
    const handleCreateFood = async (event) => {
        event.preventDefault();
        let apiUrl = "/api/create";
        let response = await axios.post(apiUrl,food);
        if (response.status === 200) {
            navigate("/");
        } else {
            setError("Food creation failed.")
        }
    }
    const handleChange = (event) => {
        const fieldName = event.currentTarget.name;
        const fieldValue = event.currentTarget.value;
        setFood({...food, [fieldName]:fieldValue});
    }
    return (
        <>
        {
            error ? (
                <Row>
                    <p className="text-danger">{error}</p>
                </Row>
            ) : ""
        }
        <Form onSubmit={handleCreateFood}>
            <Row className="mt-5">
                <Col md={4}>
                    <Form.Group controlId="foodName">
                        <Form.Label>Food name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="foodCode">
                        <Form.Label>Food Code</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="code"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="foodImage">
                        <Form.Label>Food Image URL</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="image"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={4}>
                    <Form.Group controlId="foodCategory">
                        <Form.Label>Food Category</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="category"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="foodQty">
                        <Form.Label>Food QTY </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="quantity"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="foodPrice">
                        <Form.Label>Food Price</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="price"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" className="mt-3" type="submit">Submit</Button>
        </Form>
        </>
    );
};

export default CreateFoodForm;