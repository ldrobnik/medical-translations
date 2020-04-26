import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './AnchorButton.css';

import {OFFSET_DESKTOP} from '../../../data/constants';

const AnchorButton = (props) => {

    return (
        <div
            className="anchorButtonWrapper"
        >
            <AnchorLink
                href={`#${props.target}`}
                offset={OFFSET_DESKTOP}>
                <div
                    className={`${props.background}Background anchorButton`}
                >
                    <div
                        className="insideOblique">
                        {props.message}
                    </div>
                </div>
            </AnchorLink>
        </div>

    );
};

export default AnchorButton;