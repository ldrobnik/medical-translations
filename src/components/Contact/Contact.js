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

    //specifies whether text bubbles should be visible
    const [topBubbleVisible, setTopBubbleVisible] = useState(false);

    //specifies whether text bubbles should be visible
    const [bottomBubbleVisible, setBottomBubbleVisible] = useState(false);

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
            setTopBubbleVisible(false);
            setBottomBubbleVisible(false);
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
                            onEnter={() => setTopBubbleVisible(true)}
                            bottomOffset={animationOffset}
                        />
                        <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}}>
                            <AnimatedBubble
                                pose={topBubbleVisible ? 'visible' : 'hidden'}
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
                            onEnter={() => setBottomBubbleVisible(true)}
                            bottomOffset={animationOffset}
                        />
                        <Col md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 4, offset: 4}}>
                            <AnimatedBubble
                                pose={bottomBubbleVisible ? 'visible' : 'hidden'}
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