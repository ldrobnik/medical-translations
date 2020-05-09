import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './AnchorButton.css';

import AnimatedButton from '../AnimatedButton/AnimatedButton';

import {OFFSET_DESKTOP} from '../../../data/constants';

const AnchorButton = (props) => {

    return (
        <div
            className="anchorButtonWrapper"
        >
            <AnchorLink
                href={`#${props.target}`}
                offset={OFFSET_DESKTOP}>
                <AnimatedButton
                    message={props.message}
                    background={props.background}
                />
            </AnchorLink>
        </div>

    );
};

export default AnchorButton;