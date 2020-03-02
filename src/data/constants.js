import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {
//     faPhone,
//     faEnvelope,
//     faClock
// } from "@fortawesome/free-solid-svg-icons";


//offset used for smooth scrolling
export const OFFSET_DESKTOP = '60px';
export const OFFSET_MOBILE = '280px';

//breakpoint below which the navbar collapses
export const MOBILE_BREAKPOINT = 768;

//section names
export const SECTION_NAMES = [
    {
        id: 'about',
        name: {
            en: <React.Fragment>About me</React.Fragment>,
            pl: <React.Fragment>O&nbsp;mnie</React.Fragment>
        }
    },
    {
        id: 'expertise',
        name: {
            en: <React.Fragment>Areas of Expertise</React.Fragment>,
            pl: <React.Fragment>Obszary specjalizacji</React.Fragment>
        }
    },
    {
        id: 'rates',
        name: {
            en: <React.Fragment>Usual Rates</React.Fragment>,
            pl: <React.Fragment>Typowe stawki</React.Fragment>
        }
    },
    {
        id: 'contact',
        name: {
            en: <React.Fragment>Contact Me</React.Fragment>,
            pl: <React.Fragment>Kontakt</React.Fragment>
        }
    }
];

//Text used on the website
export const WEBSITE_TEXT = {
    en: {

    },
    pl: {

    }
};
