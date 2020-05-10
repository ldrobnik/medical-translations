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
    const [topBubblesVisible, setTopBubblesVisible] = useState(true);

    //specifies whether the bottom row of text bubbles should be visible
    const [bottomBubblesVisible, setBottomBubblesVisible] = useState(true);

    //change active section
    const setSection = () => {
        dispatch(
            {
                type: actionTypes.SET_ACTIVE_SECTION,
                activeSection: SECTION_NAMES[1].id
            }
        );
    };

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="expertise"
                className="section themeBackground">
                <h1>{WEBSITE_TEXT[state.language].expertise.title}</h1>
                <Row>
                    <Col md={{span: 3, offset: 2}} className="bubbleWrapper">
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
                    <Col md={{span: 3, offset: 2}} className="bubbleWrapper">
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
                    <Col md={{span: 3, offset: 2}} className="bubbleWrapper">
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
                    <Col md={{span: 3, offset: 2}} className="bubbleWrapper">
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
        </React.Fragment>
    );
};


export default Expertise;