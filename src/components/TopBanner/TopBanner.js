import React, {useState, useEffect, useContext} from 'react';
import * as actionTypes from '../../store/constants';
import {Jumbotron} from 'react-bootstrap';
import './TopBanner.css';

import AnchorButton from '../UI/AnchorButton/AnchorButton';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import backdrop from '../../assets/images/background.jpg';
import {store} from "../../store/store";

const TopBanner = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //Sets page as loaded
    const handlePageLoaded = (pageLoaded) => {
        dispatch({
            type: actionTypes.SET_PAGE_LOADED,
            pageLoaded
        });
    };

    useEffect(() => {
       // console.log(WEBSITE_TEXT[state.language].topBanner.title);
    });

    return (
        <Jumbotron
            fluid>
            <div className="bannerContent">
                <h1 className="title">{WEBSITE_TEXT[state.language].topBanner.title}</h1>
                <div className="subtitle">{WEBSITE_TEXT[state.language].topBanner.subtitle}</div>
                <AnchorButton
                    message={WEBSITE_TEXT[state.language].topBanner.button.text}
                    target={WEBSITE_TEXT[state.language].topBanner.button.target}
                    className="bannerButton"
                />
            </div>
            <img
                className="hiddenBackdrop"
                src={backdrop}
                alt={WEBSITE_TEXT[state.language].topBanner.backdropAltText}
                onLoad={() => setTimeout(() => handlePageLoaded(true), 600)}
            />
        </Jumbotron>
    );
};


export default TopBanner;