import React, {useContext} from 'react';
import {store} from '../../store/store';
import posed, {PoseGroup} from 'react-pose';

import './Layout.css';

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
            duration: 600
        }
    }
});

const Layout = props => {
    //global state
    const {state, dispatch} = useContext(store);

    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (state.pageLoaded) ? '' : 'constrained';

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {!state.pageLoaded && <Spinner/>}
                <PoseGroup>
                    {!state.pageLoaded && [
                        <AnimatedOverlay key="overlay" className="overlay"/>
                    ]}
                </PoseGroup>
                {state.pageLoaded && <NavigationBar/>}
                {props.children}
            </div>
        </div>
    );
};

export default Layout;