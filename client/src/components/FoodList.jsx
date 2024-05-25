import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import LoadingBar from "./shared/LoadingBar.jsx";
import {Row} from "react-bootstrap";

const FoodList = () => {
    const [foods, setFoods] = useState([])
    const [error, setError] = useState(false);
    useEffect(() => {
        (async () => {
            let response = await axios.get("/api/read");
            setFoods(response.data);
        })()
    }, []);

    const handleDelete = async (foodId) => {
        let apiUrl = "/api/delete/"+foodId;
        let response = await axios.delete(apiUrl);
        if (response.status === 200) {
            await (async () => {
                let response = await axios.get("/api/read");
                setFoods(response.data);
            })()
        } else {
            setError("Something went wrong. Please try again.");
        }
    }


    return (
        foods.length === 0 ? (<LoadingBar/>) : (
            <>
                {
                    error ? (
                        <Row>
                            <p className="text-danger">{error}</p>
                        </Row>
                    ) : ""
                }
                <div className="row mt-4 p-3">
                    <p className="allFood-title">All Food List</p>
                </div>
                <div className="row p-3">
                    {
                        foods.map((food) => {
                            return (
                                <div className="col-md-4 col-lg-3" key={food._id}>
                                    <div className="card">
                                        <img src={food.image} className="card-img-top" alt=""
                                             style={{"width": "100%", "height": "200px", "objectFit": "cover"}}/>
                                        <div className="price-tag">TK: {food.price}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{food.name}</h5>
                                            <Link to={`/update/${food._id}`} className="btn btn-edit m-1">Edit</Link>
                                            <button onClick={() => handleDelete(food._id)}
                                                  className="btn btn-delete m-1">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    );
};

export default FoodList;