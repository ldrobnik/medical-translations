import React, {useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {store} from '../../store/store';
import {Waypoint} from "react-waypoint";

import './About.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT, SECTION_NAMES} from "../../data/constants";
import * as actionTypes from "../../store/constants";


const About = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

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
            <Row
                id="about"
                className="section lightBackground">
                <h1>{WEBSITE_TEXT[state.language].about.title}</h1>
            </Row>
        </React.Fragment>
    );
};


export default About;