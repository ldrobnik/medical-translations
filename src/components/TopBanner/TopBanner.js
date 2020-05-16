import React, {useEffect, useState, useContext} from 'react';
import {Col, Jumbotron} from 'react-bootstrap';
import * as actionTypes from '../../store/constants';
import './TopBanner.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT, AnimatedBubble} from "../../data/constants";
import backdrop from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.svg';
import {store} from "../../store/store";

const TopBanner = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //Sets page as loaded
    const handlePageLoaded = () => {
        dispatch({
            type: actionTypes.SET_PAGE_LOADED,
            pageLoaded: true
        });
    };

    //specifies whether text bubble should be visible
    const [bubbleVisible, setBubbleVisible] = useState(false);


    useEffect(() => {
        //hide text bubble when page is reloading, then show it after a while
        if (!state.pageLoaded) {
            setBubbleVisible(false);
        } else {
            setTimeout(() => setBubbleVisible(true), 600);
        }
    });


    return (
        <Jumbotron
            fluid
            className="verticallyCentered">
            <div className="bannerContent">
                <Col sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}
                     xl={{span: 4, offset: 4}}>
                    <AnimatedBubble
                        pose={bubbleVisible ? 'visible' : 'hidden'}
                    >
                        <TextBubble>
                            <img
                                src={logo}
                                alt="Logo"
                                width="150"
                                height="150"
                            />
                            <div className="title">{WEBSITE_TEXT[state.language].topBanner.title}</div>
                            <div className="subtitle">{WEBSITE_TEXT[state.language].topBanner.subtitle}</div>
                            <AnchorButton
                                message={WEBSITE_TEXT[state.language].topBanner.button.text}
                                target={WEBSITE_TEXT[state.language].topBanner.button.target}
                                background="light"
                                className="bannerButton"
                            />
                        </TextBubble>
                    </AnimatedBubble>
                </Col>
            </div>
            <img
                className="hiddenBackdrop"
                src={backdrop}
                alt={WEBSITE_TEXT[state.language].topBanner.backdropAltText}
                onLoad={() => setTimeout(() => handlePageLoaded(), 600)}
            />
        </Jumbotron>
    );
};


export default TopBanner;