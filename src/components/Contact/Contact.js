import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from "react-waypoint";
import './Contact.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT, AnimatedBubble} from "../../data/constants";
import {store} from "../../store/store";
import * as actionTypes from "../../store/constants";
import logo from "../../assets/images/logo.svg";

const Contact = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //specifies whether the first text bubble should be visible
    const [bubble1Visible, setBubble1Visible] = useState(false);

    //specifies whether the second text bubble should be visible
    const [bubble2Visible, setBubble2Visible] = useState(false);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[3].id
            }
        );
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = state.isMobile ? "400px" : "350px";

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
                id="contact"
                className="section themeBackground">
                <h1>{WEBSITE_TEXT[state.language].contact.title}</h1>
                <div className="bubbleWrapper">
                    <Row className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble1Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}}>
                            <AnimatedBubble
                                pose={bubble1Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    test
                                </TextBubble>
                            </AnimatedBubble>
                        </Col>
                    </Row>
                    <Row className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble2Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}}>
                            <AnimatedBubble
                                pose={bubble2Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    test
                                </TextBubble>
                            </AnimatedBubble>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Contact;