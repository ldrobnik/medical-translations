import React from 'react';

import './AnimatedButton.css';


const AnimatedButton = (props) => {

    return (
        <div
            className={`${props.background}BackgroundHoverable anchorButton`}
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