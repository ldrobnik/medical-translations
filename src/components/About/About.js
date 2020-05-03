import React, {useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import './About.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT} from "../../data/constants";
import {store} from "../../store/store";

const About = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    return (

            <Row
                id="about"
                className="section lightBackground">
                <h1>{WEBSITE_TEXT[state.language].about.title}</h1>
            </Row>
    );
};


export default About;