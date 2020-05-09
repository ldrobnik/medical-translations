import React, {useState, useEffect, useContext} from 'react';
import {store} from '../../../store/store';
import posed from 'react-pose';

import './DataNotice.css';

import AnimatedButton from '../AnimatedButton/AnimatedButton';

import {WEBSITE_TEXT} from "../../../data/constants";
import * as actionTypes from "../../../store/constants";

/* ANIMATIONS */

const AnimatedContent = posed.div({
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
});

export const DataNotice = (props) => {

    //global state
    const {state, dispatch} = useContext(store);

    //notice content to be displayed
    const [noticeVisible, setNoticeVisible] = useState(false);

    //specifies whether the fade in animation should be played
    const [noticeFadeIn, setNoticeFadeIn] = useState(false);
    //updates Redux states, setting data notice acceptance to true and data notice visibility to false, and stores the data in localStorage

    //stops displaying data notice
    const turnNoticeOff = () => {
        dispatch(
            {
                type: actionTypes.SET_DATA_NOTICE_VISIBLE,
                dataNoticeVisible: false
            }
        );
    };

    //stores info that data notice has been accepted
    const setNoticeAsAccepted = () => {
        dispatch(
            {
                type: actionTypes.SET_DATA_NOTICE_ACCEPTED,
                dataNoticeAccepted: true
            }
        );
    };

    const acceptDataNotice = () => {

        //update Redux states

        //store info that the notice has been accepted
        setNoticeAsAccepted();

        //stop displaying the notice
        turnNoticeOff();

        //store information about accepting the notice in localStorage
        localStorage.setItem('dataNoticeAccepted', true);
    };

    //sets the notice as visible and schedules fade-in animation
    const setContent = () => {
        setNoticeVisible(true);
        if (state.dataNoticeVisible) {
            setNoticeFadeIn(true);
        }
    };


    //the content of notice to be displayed depending on the setNoticeVisible value
    const notice = (props.noticeVisible && noticeVisible) ?
        (<div className="dataNotice">
            <AnimatedContent
                pose={noticeFadeIn ? 'visible' : 'hidden'}>
                <div className="dataNoticeMessage">
                    {WEBSITE_TEXT.dataNotice[props.lang].message}
                </div>
                <AnimatedButton
                    onClick={acceptDataNotice}
                    background="light"
                    message={WEBSITE_TEXT[state.language].dataNotice.message}
                >
                </AnimatedButton>
            </AnimatedContent>
        </div>) :
        <div></div>;

    useEffect(() => {
        setTimeout(setContent, 2500);
    });

    return (
        <React.Fragment>
            {(state.dataNoticeVisible && noticeVisible) && <div></div>

        }
        </React.Fragment>
    );
};


export default DataNotice;