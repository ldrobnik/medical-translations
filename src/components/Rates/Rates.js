import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from "react-waypoint";
import './Rates.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT, AnimatedBubble} from "../../data/constants";
import {store} from "../../store/store";
import * as actionTypes from "../../store/constants";

const Rates = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //specifies whether text bubbles should be visible
    const [bubblesVisible, setBubblesVisible] = useState(true);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[2].id
            }
        );
    };

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="rates"
                className="section lightBackground">
                <h1>{WEBSITE_TEXT[state.language].rates.title}</h1>
                <Row className="bubbleWrapper">
                    <Col md={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={bubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                    <Col md={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={bubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};


export default Rates;