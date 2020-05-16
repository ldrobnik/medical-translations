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

    //specifies whether the first text bubble should be visible
    const [bubble1Visible, setBubble1Visible] = useState(true);

    //specifies whether the second text bubble should be visible
    const [bubble2Visible, setBubble2Visible] = useState(true);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[2].id
            }
        );
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = state.isMobile ? "350px" : "300px";

    useEffect(() => {
        //hide text bubbles when page is reloading
        if (!state.pageLoaded) {
            setBubble1Visible(false);
            setBubble2Visible(false);
        }
    });

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
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble1Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <AnimatedBubble
                            pose={bubble1Visible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble2Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <AnimatedBubble
                            pose={bubble2Visible ? 'visible' : 'hidden'}
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