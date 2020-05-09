import React from 'react';

import './AnimatedButton.css';


const AnimatedButton = (props) => {

    return (
        <div
            className={`${props.background}BackgroundHoverable animatedButton`}
            onClick={props.action}
        >
            <div
                className="insideOblique">
                {props.message}
            </div>
        </div>

    );
};

export default AnimatedButton;