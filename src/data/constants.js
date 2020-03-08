import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faClock
} from "@fortawesome/free-solid-svg-icons";


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
        jumbotron: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>English to Polish medical translations</React.Fragment>,
            button: {
                text: <React.Fragment>Learn more</React.Fragment>,
                id: 'about'
            }
        },
        about: {

        },
        expertise: {
            experience: [
                {
                    title: <React.Fragment>Clinical trials</React.Fragment>,
                    areas: [
                        <React.Fragment>informed consent forms</React.Fragment>,
                        <React.Fragment>protocols</React.Fragment>,
                        <React.Fragment>protocol synopses</React.Fragment>,
                        <React.Fragment>investigator brochures</React.Fragment>,
                        <React.Fragment>patient guides</React.Fragment>,
                        <React.Fragment>patient questionnaires</React.Fragment>,
                        <React.Fragment>ethics correspondence</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Pharmaceuticals</React.Fragment>,
                    areas: [
                        <React.Fragment>summaries of product characteristics</React.Fragment>,
                        <React.Fragment>patient leaflets</React.Fragment>,
                        <React.Fragment>training materials</React.Fragment>,
                        <React.Fragment>presentation materials</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Medical devices</React.Fragment>,
                    areas: [
                        <React.Fragment>instructions for use</React.Fragment>,
                        <React.Fragment>operating manuals</React.Fragment>,
                        <React.Fragment>installation manuals</React.Fragment>,
                        <React.Fragment>package inserts</React.Fragment>,
                        <React.Fragment>software</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Other</React.Fragment>,
                    areas: [
                        <React.Fragment>scientific publications</React.Fragment>,
                        <React.Fragment>educational materials</React.Fragment>,
                        <React.Fragment>websites</React.Fragment>,
                        <React.Fragment>voice & video scripts</React.Fragment>,
                        <React.Fragment>newsletters</React.Fragment>,
                        <React.Fragment>correspondence</React.Fragment>
                    ]
                }
            ]
        },
        rates: {},
        contact: {}
    },
    pl: {
        jumbotron: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>Tłumacz medyczny języka angielskiego</React.Fragment>,
            button: <React.Fragment>Dowiedz się więcej</React.Fragment>
        },
        about: {

        },
        expertise: {

            experience: [
                {
                    title: <React.Fragment>Badania kliniczne</React.Fragment>,
                    areas: [
                        <React.Fragment>formularze świadomej zgody</React.Fragment>,
                        <React.Fragment>protokoły</React.Fragment>,
                        <React.Fragment>streszczenia protokołów</React.Fragment>,
                        <React.Fragment>broszury badacza</React.Fragment>,
                        <React.Fragment>poradniki dla pacjenta</React.Fragment>,
                        <React.Fragment>kwestionariusze dla pacjenta</React.Fragment>,
                        <React.Fragment>korespondencja z&nbsp;komisjami etycznymi</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Farmaceutyki</React.Fragment>,
                    areas: [
                        <React.Fragment>charakterystyki produktów leczniczych</React.Fragment>,
                        <React.Fragment>ulotki dla pacjenta</React.Fragment>,
                        <React.Fragment>materiały szkoleniowe</React.Fragment>,
                        <React.Fragment>prezentacje</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Wyroby medyczne</React.Fragment>,
                    areas: [
                        <React.Fragment>instrukcje użytkowania</React.Fragment>,
                        <React.Fragment>podręczniki obsługi</React.Fragment>,
                        <React.Fragment>podręczniki instalacji</React.Fragment>,
                        <React.Fragment>ulotki dołączone do opakowania</React.Fragment>,
                        <React.Fragment>oprogramowanie</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Inne</React.Fragment>,
                    areas: [
                        <React.Fragment>publikacje naukowe</React.Fragment>,
                        <React.Fragment>materiały edukacyjne</React.Fragment>,
                        <React.Fragment>strony internetowe</React.Fragment>,
                        <React.Fragment>skrypty audio i&nbsp;wideo</React.Fragment>,
                        <React.Fragment>biuletyny</React.Fragment>,
                        <React.Fragment>korespondencja</React.Fragment>
                    ]
                }
            ]
        }

    },
    rates: {},
    contact: {}
}
}
;
