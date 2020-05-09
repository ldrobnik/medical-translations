import React, {useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Waypoint} from "react-waypoint";
import './Expertise.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import {store} from "../../store/store";
import * as actionTypes from "../../store/constants";

const Expertise = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

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
            <Row
                id="expertise"
                className="section themeBackground">
                <h1>{WEBSITE_TEXT[state.language].expertise.title}</h1>
            </Row>
        </React.Fragment>
    );
};


export default Expertise;