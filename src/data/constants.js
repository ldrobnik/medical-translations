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
            en: <React.Fragment>Areas of expertise</React.Fragment>,
            pl: <React.Fragment>Specjalizacje</React.Fragment>
        }
    },
    {
        id: 'rates',
        name: {
            en: <React.Fragment>Usual rates</React.Fragment>,
            pl: <React.Fragment>Typowe stawki</React.Fragment>
        }
    },
    {
        id: 'contact',
        name: {
            en: <React.Fragment>Contact me</React.Fragment>,
            pl: <React.Fragment>Kontakt</React.Fragment>
        }
    }
];

//Text used on the website
export const WEBSITE_TEXT = {
    en: {
        navbar: {
          lang: 'PL'
        },
        jumbotron: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>English to Polish medical translations</React.Fragment>,
            button: {
                text: <React.Fragment>Learn more</React.Fragment>,
                target: 'about'
            }
        },
        about: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>Medical translator</React.Fragment>,
            body: <React.Fragment>I am an English to Polish translator specialising in medicine and pharmaceuticals. With more than thirteen years of experience in the field, backed up by my background in life sciences (MSc in biotechnology) and a postgraduate degree in translation, I can help you reach your Polish audience by providing reliable translations of the highest quality.</React.Fragment>,
            button: {
                text: <React.Fragment>Contact me</React.Fragment>,
                target: 'contact'
            }
        },
        expertise: {
            title: <React.Fragment>Areas of expertise</React.Fragment>,
            body: <React.Fragment>Over the years I have spent as a full-time freelance translator, I have tackled hundreds of medical and pharmaceutical texts: from medical equipment manuals to scientific papers (on subjects ranging from microbiology to oncology), to clinical trial documentation, to medicinal product information. I approach every job as a new challenge, with the utmost attention to detail and thorough research.</React.Fragment>,
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
            ],
            button: {
                text: <React.Fragment>Contact me</React.Fragment>,
                target: 'contact'
            }
        },
        rates: {
            title: <React.Fragment>Usual rates</React.Fragment>,
            pricing: {
                title: [
                    'Translation',
                    'Revision'
                ],
                units: [
                    {
                        name: <React.Fragment>Rate per word:</React.Fragment>,
                        price: [
                            <React.Fragment>0.08&bnsp;EUR</React.Fragment>,
                            <React.Fragment>0.04&bnsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Rate per page (250&nbsp;words):</React.Fragment>,
                        price: [
                            <React.Fragment>20&bnsp;EUR</React.Fragment>,
                            <React.Fragment>10&bnsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Hourly rate:</React.Fragment>,
                        price: [
                            <React.Fragment>20&bnsp;EUR</React.Fragment>,
                            <React.Fragment>20&bnsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Minimum rate:</React.Fragment>,
                        price: [
                            <React.Fragment>20&bnsp;EUR</React.Fragment>,
                            <React.Fragment>20&bnsp;EUR</React.Fragment>
                        ]
                    }
                ]
            },
            button: {
                text: <React.Fragment>Contact me</React.Fragment>,
                target: 'contact'
            }
        },
        contact: {
            title: <React.Fragment>Contact me</React.Fragment>,
            body: <React.Fragment>If you need my help in translating a text or require linguistic support of any kind, please do not hesitate to contact me at <a href="mailto:lukasz@drobnik.biz">lukasz@drobnik.biz</a>.</React.Fragment>,
            links: {
                text: <React.Fragment>You can also find me here:</React.Fragment>,
                links: [
                    {
                        text: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/lukasz-drobnik/'
                    },
                    {
                        text: 'Proz.com',
                        url: 'http://www.proz.com/translator/735716'
                    }
                ]
            }
        }
    },
    pl: {
        navbar: {
            lang: 'EN'
        },
        jumbotron: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>Tłumacz medyczny języka angielskiego</React.Fragment>,
            button: {
                text: <React.Fragment>Dowiedz się więcej</React.Fragment>,
                target: 'about'
            }
        },
        about: {
            title: <React.Fragment>Łukasz Drobnik</React.Fragment>,
            subtitle: <React.Fragment>Tłumacz medyczny</React.Fragment>,
            body: <React.Fragment>Jestem tłumaczem języka angielskiego specjalizującym się w&nbsp;medycynie i&nbsp;farmacji. Dzięki ponad trzynastoletniemu doświadczeniu w&nbsp;branży, popartemu wykształceniem przyrodniczym (magister biotechnologii) i&nbsp;podyplomowymi studiami tłumaczeniowymi, pomagam klientom w&nbsp;dotarciu do polskojęzycznych odbiorców, dostarczając rzetelne tłumaczenia o&nbsp;najwyższej jakości.</React.Fragment>,
            button: {
                text: <React.Fragment>Napisz do mnie</React.Fragment>,
                target: 'contact'
            }
        },
        expertise: {
            title: <React.Fragment>Specjalizacje</React.Fragment>,
            body: <React.Fragment>W&nbsp;ciągu wieloletniej, pełnowymiarowej pracy jako tłumacz freelancer zmierzyłem się z&nbsp;setkami tekstów z&nbsp;dziedzin medyny i&nbsp;farmacji: od instrukcji obsługi wyrobów medycznych przez artykuły naukowe (na różnorodne tematy - od mikrobiologii po onkologię), dokumentację badań klinicznych aż po druki informacyjne produktów leczniczych. Każde zlecenie traktuję jak nowe wyzwanie, pracując z&nbsp;najwyższą dbałością o&nbsp;szczegóły i&nbsp;rzetelnym zgłębieniem tematu.</React.Fragment>,
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
            ],
            button: {
                text: <React.Fragment>Napisz do mnie</React.Fragment>,
                target: 'contact'
            }
        }

    },
    rates: {
        title: <React.Fragment>Typowe stawki</React.Fragment>,
        pricing: {
            title: [
                'Tłumaczenie',
                'Weryfikacja'
            ],
            units: [
                {
                    name: <React.Fragment>Stawka za słowo:</React.Fragment>,
                    price: [
                        <React.Fragment>0.32&bnsp;PLN</React.Fragment>,
                        <React.Fragment>0.16&bnsp;PLN</React.Fragment>
                    ]
                },
                {
                    name: <React.Fragment>Stawka za stronę (250&nbsp;słów):</React.Fragment>,
                    price: [
                        <React.Fragment>80&bnsp;PLN</React.Fragment>,
                        <React.Fragment>40&bnsp;PLN</React.Fragment>
                    ]
                },
                {
                    name: <React.Fragment>Stawka godzinowa:</React.Fragment>,
                    price: [
                        <React.Fragment>80&bnsp;PLN</React.Fragment>,
                        <React.Fragment>80&bnsp;PLN</React.Fragment>
                    ]
                },
                {
                    name: <React.Fragment>Stawka minimalna:</React.Fragment>,
                    price: [
                        <React.Fragment>80&bnsp;PLN</React.Fragment>,
                        <React.Fragment>80&bnsp;PLN</React.Fragment>
                    ]
                }
            ]
        },
        button: {
            text: <React.Fragment>Napisz do mnie</React.Fragment>,
            target: 'contact'
        }
    },
    contact: {
        title: <React.Fragment>Kontakt</React.Fragment>,
        body: <React.Fragment>Jeśli potrzebujesz pomocy w&nbsp;tłumaczeniu tekstu lub innej usługi językowej, napisz na adres <a href="mailto:lukasz@drobnik.biz">lukasz@drobnik.biz</a>.</React.Fragment>,
        links: {
            text: <React.Fragment>Można mnie znaleźć także tutaj:</React.Fragment>,
            links: [
                {
                    text: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/lukasz-drobnik/'
                },
                {
                    text: 'Proz.com',
                    url: 'http://www.proz.com/translator/735716'
                }
            ]
        }
    }
}
;
