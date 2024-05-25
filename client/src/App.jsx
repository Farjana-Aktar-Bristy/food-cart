import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateFood from "./pages/CreateFood.jsx";
import UpdateFood from "./pages/UpdateFood.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/create" element={<CreateFood/>}></Route>
                <Route path="/update/:foodId" element={<UpdateFood/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;