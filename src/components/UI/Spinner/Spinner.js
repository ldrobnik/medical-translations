import React from 'react';

import logoImage from '../../../assets/images/logo-blue.svg';
import './Spinner.css';


const Spinner = () => {


    return (
        <div className="outerWrapper">
            <div className="spinnerWrapper">

                <img
                    src={logoImage}
                    alt="loading spinner"
                    height="110px"
                    width="110px"
                />
            </div>
            <div className="spinnerBackdrop"></div>
        </div>
    );
};

export default Spinner;