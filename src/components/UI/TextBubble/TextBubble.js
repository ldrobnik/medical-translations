import React from 'react';

import './TextBubble.css';


const TextBubble = props => {

    //optional class adding border
    const borderClass = props.border ? 'withBorder' : '';

    return (
        <div className={`textBubble ${borderClass}`}>
            <div className="insideOblique">
                {props.children}
            </div>
        </div>
    );
};

export default TextBubble;