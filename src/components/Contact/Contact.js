import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from 'react-waypoint';
import './Contact.css';

import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT, AnimatedBubble} from '../../data/constants';
import {store} from '../../store/store';
import * as actionTypes from '../../store/constants';

const Contact = () => {

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
    const animationOffset = state.isMobile ? '400px' : '280px';

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
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].contact.body}
                                    </div>
                                    <div className="slightlyPadded emailLink">
                                        {WEBSITE_TEXT[state.language].contact.email}
                                    </div>
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
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].contact.links.text}
                                    </div>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].contact.links.links.map((link, k) => {
                                            return (
                                                <div
                                                    className="contactLink"
                                                    key={k}
                                                >
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.text}
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </div>
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