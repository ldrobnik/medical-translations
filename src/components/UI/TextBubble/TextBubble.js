import React from 'react';

import './TextBubble.css';


const TextBubble = props => {

    return (
        <div className="textBubble">
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default TextBubble;