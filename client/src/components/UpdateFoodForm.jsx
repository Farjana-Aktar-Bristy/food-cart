import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";

const UpdateFoodForm = () => {
    const {foodId} = useParams();
    const [food, setFood] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useLayoutEffect(() => {
        (async () => {
            let response = await axios.get(`/api/getFood/${foodId}`);
            setFood(response.data);
        })()
    }, []);
    const handleUpdateFood = async (event) => {
        event.preventDefault();
        let apiUrl = "/api/updateFood/"+foodId;
        console.log("updated food = ",food);
        let response = await axios.put(apiUrl,food);
        console.log("status = ",response.status);
        if (response.status === 200) {
            navigate("/");
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
    const handleChange = (event) => {
        const fieldName = event.currentTarget.name;
        const fieldValue = event.currentTarget.value;
        setFood({...food, [fieldName]:fieldValue});
    }
    return (
        <Form onSubmit={handleUpdateFood}>
            {
                error ? (
                    <Row>
                        <p className="text-danger">{error}</p>
                    </Row>
                ) : ""
            }
            <Row className="mt-5">
                <Col md={4}>
                    <Form.Group controlId="foodName">
                        <Form.Label>Food name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            value={food.name}
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
                            value={food.code}
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
                            value={food.image}
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
                            value={food.category}
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
                            value={food.quantity}
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
                            value={food.price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" className="mt-3" type="submit">Submit</Button>
        </Form>
    );
};

export default UpdateFoodForm;