import React, {useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Expertise.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT} from "../../data/constants";
import {store} from "../../store/store";

const Expertise = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    return (

        <Row
            id="expertise"
            className="section themeBackground">
            <h1>{WEBSITE_TEXT[state.language].expertise.title}</h1>
        </Row>
    );
};


export default Expertise;