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

    //specifies whether the top row of text bubbles should be visible
    const [topBubblesVisible, setTopBubblesVisible] = useState(false);

    //specifies whether the bottom row of text bubbles should be visible
    const [bottomBubblesVisible, setBottomBubblesVisible] = useState(false);

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
    const animationOffset = state.isMobile ? "450px" : "400px";

    useEffect(() => {
        //hide text bubbles when page is reloading
        if (!state.pageLoaded) {
            setTopBubblesVisible(false);
            setBottomBubblesVisible(false);
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
                    <Waypoint
                        onEnter={() => setTopBubblesVisible(true)}
                        bottomOffset={animationOffset}
                    />
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={topBubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble
                                border="true"
                            >
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={topBubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble
                                border="true"
                            >
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                </Row>
                <Row>
                    <Waypoint
                        onEnter={() => setBottomBubblesVisible(true)}
                        bottomOffset={animationOffset}
                    />
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={bottomBubblesVisible ? 'visible' : 'hidden'}
                        >
                            <TextBubble
                                border="true"
                            >
                                test
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                    <Col xl={{span: 3, offset: 2}} className="bubbleSecondaryWrapper">
                        <AnimatedBubble
                            pose={bottomBubblesVisible ? 'visible' : 'hidden'}
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


export default Expertise;