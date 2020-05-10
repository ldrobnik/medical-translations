import React, {useEffect, useContext} from 'react';
import {Col} from 'react-bootstrap';
import * as actionTypes from '../../store/constants';
import {Jumbotron} from 'react-bootstrap';
import './TopBanner.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';
import TextBubble from '../UI/TextBubble/TextBubble';

import {WEBSITE_TEXT} from "../../data/constants";
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

    useEffect(() => {
        // console.log(WEBSITE_TEXT[state.language].topBanner.title);
    });

    return (
        <Jumbotron
            fluid
        className="verticallyCentered">
            <div className="bannerContent">
                <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }}>
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