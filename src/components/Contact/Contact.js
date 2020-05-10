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
    const [bubblesVisible, setBubblesVisible] = useState(true);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[3].id
            }
        );
    };

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="contact"
                className="section themeBackground">
                <h1>{WEBSITE_TEXT[state.language].contact.title}</h1>
                <Row className="bubbleWrapper">
                    <Col sm={{span: 6, offset: 3}} md={{span: 4, offset: 4}}>
                        <AnimatedBubble
                            pose={bubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble
                                border="true"
                            >
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                </Row>
                <Row className="bubbleWrapper">
                    <Col sm={{span: 6, offset: 3}} md={{span: 4, offset: 4}}>
                        <AnimatedBubble
                            pose={bubblesVisible ? 'visible' : 'hidden'}
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
        </React.Fragment>
    );
};


export default Contact;