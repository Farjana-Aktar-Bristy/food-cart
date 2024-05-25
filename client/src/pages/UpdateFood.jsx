import React from 'react';
import MasterLayout from "../components/shared/MasterLayout.jsx";
import UpdateFoodForm from "../components/UpdateFoodForm.jsx";

const UpdateFood = () => {
    return (
        <MasterLayout>
            <div className="m-5">
                <h3 className="updateFood-title"> Update Food Item </h3>
                <UpdateFoodForm/>
            </div>
        </MasterLayout>
    );
};

export default UpdateFood;
