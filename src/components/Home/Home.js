import React, {useContext} from 'react';
import {store} from '../../store/store';
import posed, {PoseGroup} from 'react-pose';

import Spinner from '../UI/Spinner/Spinner';
import NavigationBar from '../NavigationBar/NavigationBar';


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


const Home = (props) => {
    //global state
    const globalState = useContext(store);
    const {state} = globalState;

    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (state.pageLoaded) ? "" : "constrained";

    //display the navbar only after the page is loaded
    const navBar = (state.pageLoaded) ? <NavigationBar /> : null;

    //display spinner only when the page is not loaded
    let spinner = (!state.pageLoaded) ? <Spinner /> : null;

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {spinner}
                <PoseGroup>
                    {!state.pageLoaded && [
                        <AnimatedOverlay key="overlay" className="overlay" />
                    ]}
                </PoseGroup>
                {navBar}
                <div id="top"></div>
                body
            </div>
        </div>
    );
};

export default Home;