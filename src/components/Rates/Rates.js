import React, {useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Rates.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT} from "../../data/constants";
import {store} from "../../store/store";

const Rates = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    return (

        <Row
            id="rates"
            className="section noBackground">
            <h1>{WEBSITE_TEXT[state.language].rates.title}</h1>
        </Row>
    );
};


export default Rates;