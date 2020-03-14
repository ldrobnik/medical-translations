import React, {useContext} from 'react';
import {store} from '../../store/store';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import Spinner from '../UI/Spinner/Spinner';


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
    //app global state
    const globalState = useContext(store);


    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (globalState.loaded) ? "" : "constrained";

    //display the navbar only after the page is loaded
    const navBar = (globalState.loaded) ? <div>navbar</div> : null;

    //display spinner only when the page is not loaded
    let spinner = (!globalState.loaded) ? <Spinner /> : null;

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {spinner}
                <PoseGroup>
                    {!globalState.loaded && [
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

// const mapStateToProps = state => {
//     return {
//         loaded: state.pageLoaded
//     }
// };

// export default connect(mapStateToProps)(Home);

export default Home;