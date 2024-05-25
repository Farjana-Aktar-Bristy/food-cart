import React from 'react';
import loader from "../../assets/icon/loader.gif";

const LoadingBar = () => {
    return (
        <div className="row">
            <div className="col loader-div">
                <img src={loader} alt="Loading..." className="loader"/>
            </div>
        </div>
    );
};

export default LoadingBar;