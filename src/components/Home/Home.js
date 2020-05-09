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

    //sets website language
    const setLanguage = (lang) => {
      dispatch(
          {
              type: actionTypes.SET_LANGUAGE,
              language: lang
          }
      );
    };


    //checks if any data is stored in localStorage and updates Redux state accordingly
    const checkLocalStorage = () => {

        //check if data storage notice has been agreed to and if so, update Redux state accordingly
        const noticeAccepted = localStorage.getItem('dataNoticeAccepted');

        if (noticeAccepted) {
            //store info that the notice has been accepted in Redux store
            // props.setDataNoticeAccepted(true);

            //stop displaying the notice
            // props.setDataNoticeVisible(false);
        }

        //check if the language is stored in localStorate and if so, update Redux state accordingly
        const storedLanguage = localStorage.getItem('language');

        //if there is a language stored, used it on the website
        if (storedLanguage === 'en' || storedLanguage === 'pl') {
            setLanguage(storedLanguage);
        }
    };

    useEffect(() => {
        //checks local storage and updates the store accordingly
        checkLocalStorage();

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