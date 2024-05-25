import React from 'react';

import MasterLayout from "../components/shared/MasterLayout.jsx";
import FoodList from "../components/FoodList.jsx";


const HomePage = () => {

    return (
        <MasterLayout>
            <FoodList/>
        </MasterLayout>
    );
};


export default HomePage;