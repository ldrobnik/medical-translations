import React, {useEffect, useContext, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {store} from '../../store/store';
import {Waypoint} from "react-waypoint";

import './About.css';

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


    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => setSection()}
            />
            <div
                id="about"
                className="section lightBackground">
                <h1>{WEBSITE_TEXT[state.language].about.title}</h1>
            </div>
        </React.Fragment>
    );
};


export default About;