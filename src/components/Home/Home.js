import React, {useEffect, useContext} from 'react';
import {store} from '../../store/store';
import posed, {PoseGroup} from 'react-pose';

import Layout from '../Layout/Layout';
import Spinner from '../UI/Spinner/Spinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import TopBanner from '../TopBanner/TopBanner';
import * as actionTypes from "../../store/constants";
import {WEBSITE_TEXT} from "../../data/constants";


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
        setTimeout(setPageAsLoaded, 500);

        //update page title depending on the current language
        document.title=WEBSITE_TEXT[state.language].title;
    }, []);

    //update page title every time the current language changes
    useEffect(() => {
        //update page title depending on the current language
        document.title=WEBSITE_TEXT[state.language].title;
    }, [state.language]);

    return (
        <Layout>
                <div id="top"></div>
                <TopBanner />
        </Layout>
    );
};

export default Home;