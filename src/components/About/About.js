import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {store} from '../../store/store';
import {Waypoint} from "react-waypoint";

import portrait from '../../assets/images/portrait.jpg';
import './About.css';

import Portrait from './Portrait/Portrait';
import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT, SECTION_NAMES, AnimatedBubble} from "../../data/constants";
import * as actionTypes from "../../store/constants";


const About = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //specifies whether text bubble should be visible
    const [bubbleVisible, setBubbleVisible] = useState(false);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[0].id
            }
        );
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = state.isMobile ? "350px" : "300px";

    useEffect(() => {
        //hide text bubble when page is reloading
        if (!state.pageLoaded) {
            setBubbleVisible(false);
        }
    });
    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="about"
                className="section lightBackground">
                <h1>{WEBSITE_TEXT[state.language].about.title}</h1>
                <Waypoint
                    onEnter={() => setBubbleVisible(true)}
                    bottomOffset={animationOffset}
                />
                <Row className="bubbleWrapper">
                    <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}
                         xl={{span: 6, offset: 3}}>
                        <AnimatedBubble
                            pose={bubbleVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                <div className="horizontallyCentered subsection">
                                    <Portrait
                                        source={portrait}
                                        altText={WEBSITE_TEXT[state.language].about.altText}
                                    />
                                </div>
                                <div className="subsection">
                                    {WEBSITE_TEXT[state.language].about.body}
                                </div>
                                <div className="subsection">
                                    <AnchorButton
                                        message={WEBSITE_TEXT[state.language].about.button.text}
                                        target={WEBSITE_TEXT[state.language].about.button.target}
                                        background="light"
                                        className="bannerButton"
                                    />
                                </div>
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};


export default About;