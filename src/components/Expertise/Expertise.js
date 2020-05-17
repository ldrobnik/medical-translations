import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from "react-waypoint";
import './Expertise.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT, AnimatedBubble} from "../../data/constants";
import {store} from "../../store/store";
import * as actionTypes from "../../store/constants";

const Expertise = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //specifies whether the first text bubble should be visible
    const [bubble1Visible, setBubble1Visible] = useState(true);

    //specifies whether the second text bubble should be visible
    const [bubble2Visible, setBubble2Visible] = useState(true);

    //specifies whether the third text bubble should be visible
    const [bubble3Visible, setBubble3Visible] = useState(true);

    //specifies whether the fourth text bubble should be visible
    const [bubble4Visible, setBubble4Visible] = useState(true);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[1].id
            }
        );
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = state.isMobile ? "450px" : "300px";

    useEffect(() => {
        //hide text bubbles when page is reloading
        if (!state.pageLoaded) {
            setBubble1Visible(false);
            setBubble2Visible(false);
            setBubble3Visible(false);
            setBubble4Visible(false);
        }
    });

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="expertise"
                className="section themeBackground">
                <h1>{WEBSITE_TEXT[state.language].expertise.title}</h1>
                <div className="bubbleWrapper">
                    <Row>
                        <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper verticallyCentered">
                            <Waypoint
                                onEnter={() => setBubble1Visible(true)}
                                bottomOffset={animationOffset}
                            />
                            <AnimatedBubble
                                pose={bubble1Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[0].title}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[0].areas.map((area, k) => {
                                            return (
                                                <div
                                                    className="expertiseArea"
                                                    key={k}
                                                >
                                                    {area}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </TextBubble>
                            </AnimatedBubble>
                        </Col>
                        <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper verticallyCentered">
                            <Waypoint
                                onEnter={() => setBubble2Visible(true)}
                                bottomOffset={animationOffset}
                            />
                            <AnimatedBubble
                                pose={bubble2Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[1].title}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[1].areas.map((area, k) => {
                                            return (
                                                <div
                                                    className="expertiseArea"
                                                    key={k}
                                                >
                                                    {area}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </TextBubble>
                            </AnimatedBubble>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper verticallyCentered">
                            <Waypoint
                                onEnter={() => setBubble3Visible(true)}
                                bottomOffset={animationOffset}
                            />
                            <AnimatedBubble
                                pose={bubble3Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[2].title}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[2].areas.map((area, k) => {
                                            return (
                                                <div
                                                    className="expertiseArea"
                                                    key={k}
                                                >
                                                    {area}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </TextBubble>
                            </AnimatedBubble>
                        </Col>
                        <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper verticallyCentered">
                            <Waypoint
                                onEnter={() => setBubble4Visible(true)}
                                bottomOffset={animationOffset}
                            />
                            <AnimatedBubble
                                pose={bubble4Visible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    border="true"
                                >
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[3].title}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].expertise.experience[3].areas.map((area, k) => {
                                            return (
                                                <div
                                                    className="expertiseArea"
                                                    key={k}
                                                >
                                                    {area}
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


export default Expertise;