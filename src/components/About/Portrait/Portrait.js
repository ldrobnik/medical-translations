import React, {useState} from 'react';
import './Portrait.css';


const Portrait = (props) => {

    return (
        <div
            className="portraitWrapper">
            <div
                className="insideOblique"
            >
                <img
                    src={props.source}
                    alt={props.altText}
                    className="portrait"
                />
            </div>
        </div>
    );
};

export default Portrait;