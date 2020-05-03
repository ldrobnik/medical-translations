import React, {useEffect, useContext} from 'react';
import {store} from '../../store/store';

import './Home.css';

import Layout from '../Layout/Layout';
import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import Expertise from '../Expertise/Expertise';
import Rates from '../Rates/Rates';
import Contact from '../Contact/Contact';
import * as actionTypes from "../../store/constants";
import {WEBSITE_TEXT} from "../../data/constants";

const Home = () => {
    //global state
    const {state, dispatch} = useContext(store);


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
                <About />
                <Expertise />
                <Rates />
                <Contact />
        </Layout>
    );
};

export default Home;