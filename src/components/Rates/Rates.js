import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from 'react-waypoint';
import './Rates.css';

import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT, AnimatedBubble} from '../../data/constants';
import {store} from '../../store/store';
import * as actionTypes from '../../store/constants';

const Rates = () => {

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
    const animationOffset = state.isMobile ? '450px' : '300px';

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
                    <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}}
                         className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble1Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <AnimatedBubble
                            pose={bubble1Visible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                <div className="subsection">
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].rates.pricing.title[0]}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].rates.pricing.units.map((unit, k) => {
                                            return (
                                                <div
                                                    className="pricingUnit"
                                                    key={k}
                                                >
                                                    {unit.name} <span className="price">{unit.price[0]}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="slightlyPadded ratesFootnote">
                                        {WEBSITE_TEXT[state.language].rates.pricing.footnote}
                                    </div>
                                </div>
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                    <Col sm={{span: 8, offset: 2}} lg={{span: 6, offset: 3}} xl={{span: 3, offset: 2}}
                         className="bubbleSecondaryWrapper">
                        <Waypoint
                            onEnter={() => setBubble2Visible(true)}
                            bottomOffset={animationOffset}
                        />
                        <AnimatedBubble
                            pose={bubble2Visible ? 'visible' : 'hidden'}
                        >
                            <TextBubble>
                                <div className="subsection">
                                    <h3 className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].rates.pricing.title[1]}
                                    </h3>
                                    <div className="slightlyPadded">
                                        {WEBSITE_TEXT[state.language].rates.pricing.units.map((unit, k) => {
                                            return (
                                                <div
                                                    className="pricingUnit"
                                                    key={k}
                                                >
                                                    {unit.name} <span className="price">{unit.price[1]}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="slightlyPadded ratesFootnote">
                                        {WEBSITE_TEXT[state.language].rates.pricing.footnote}
                                    </div>
                                </div>
                            </TextBubble>
                        </AnimatedBubble>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};


export default Rates;