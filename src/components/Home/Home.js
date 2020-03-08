import React from 'react';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';



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

    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (props.loaded) ? "" : "constrained";

    //display the navbar only after the page is loaded
    const navBar = (props.loaded) ? <NavigationBar /> : null;

    //display spinner only when the page is not loaded
    let spinner = (!props.loaded) ? <Spinner /> : null;

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                spinner
                <PoseGroup>
                    {!props.loaded && [
                        <AnimatedOverlay key="overlay" className="overlay" />
                    ]}
                </PoseGroup>
                navbar
                <div id="top"></div>
                body
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Home);