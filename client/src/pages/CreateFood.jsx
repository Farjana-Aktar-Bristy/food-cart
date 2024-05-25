import React from 'react';
import MasterLayout from "../components/shared/MasterLayout.jsx";
import CreateFoodForm from "../components/CreateFoodForm.jsx";

const CreateFood = () => {
    return (
        <MasterLayout>
           <div className="m-5">
                <h3 className="createFood-title">Create Food Item </h3>
               <CreateFoodForm/>
           </div>
        </MasterLayout>
    );
};

export default CreateFood;