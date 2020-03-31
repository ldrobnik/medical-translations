import React from 'react';

import './TextBubble.css';


const TextBubble = props => {

    return (
        <div className="textBubble">
            <div className="insideOblique">
                {props.children}
            </div>
        </div>
    );
};

export default TextBubble;