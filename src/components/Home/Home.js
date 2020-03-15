import React, {useEffect, useContext} from 'react';
import {store} from '../../store/store';
import posed, {PoseGroup} from 'react-pose';

import Spinner from '../UI/Spinner/Spinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import * as actionTypes from "../../store/constants";


/* POSE */
const AnimatedOverlay = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: 800
        }
    }
});

const Home = () => {
    //global state
    const {state, dispatch} = useContext(store);

    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (state.pageLoaded) ? "" : "constrained";

    //sets page loading status to 'loaded'
    const setPageAsLoaded = () => {
      dispatch(
          {
              type: actionTypes.SET_PAGE_LOADED,
              pageLoaded: true
          }
      );
    };

    useEffect(() => {
        setTimeout(setPageAsLoaded, 1000);
    }, []);

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {!state.pageLoaded && <Spinner />}
                <PoseGroup>
                    {!state.pageLoaded && [
                        <AnimatedOverlay key="overlay" className="overlay" />
                    ]}
                </PoseGroup>
                {state.pageLoaded && <NavigationBar />}
                <div id="top"></div>
                body
            </div>
        </div>
    );
};

export default Home;