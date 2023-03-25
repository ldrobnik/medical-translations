import React from 'react';
import posed from 'react-pose';

//offset used for smooth scrolling
export const OFFSET_DESKTOP = '60px';
export const OFFSET_MOBILE = '280px';

//breakpoint below which the navbar collapses
export const MOBILE_BREAKPOINT = 768;

//The year when Kasia's translation career started
const activeSince = 2008;

//Current year
const currentYear = new Date().getFullYear();

//Years Kasia has been translating
const yearsActive = currentYear - activeSince;

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
            en: <React.Fragment>Rates</React.Fragment>,
            pl: <React.Fragment>Stawki</React.Fragment>
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
        title: 'Katarzyna Drobnik - Polish medical translator',
        navbar: {
            lang: 'PL'
        },
        topBanner: {
            title: <React.Fragment>Katarzyna Drobnik,<br/><span className="degree">PhD</span></React.Fragment>,
            subtitle: <React.Fragment>English-to-Polish medical translations</React.Fragment>,
            button: {
                text: 'Learn more',
                target: 'about'
            },
            backdropAltText: 'Electron microscope photography of erythrocytes'
        },
        about: {
            title: SECTION_NAMES[0].name.en,
            body:
                <React.Fragment>
                    <p>I’m an <strong>English-to-Polish translator specialising in medicine and pharmaceuticals</strong>.
                        With {yearsActive} years of experience in the field, backed up by my background in life
                        sciences, I
                        can help you reach your Polish audience by providing reliable translations of the highest
                        quality.
                    </p>

                    <p>In my work, I make extensive use of my education. I’m a holder of a <strong>master’s degree in
                        biotechnology</strong> and a <strong>doctor’s degree in medical sciences</strong>. As part of my doctoral research, I studied
                        correlation
                        between changes in the <em>COX-2</em> gene and thyroid cancer.</p>

                    <p>I look forward to hearing from you.</p>
                </React.Fragment>,
            altText: 'Katarzyna Drobnik’s photo',
            button: {
                text: <React.Fragment>Contact me</React.Fragment>,
                target: 'contact'
            }
        },
        expertise: {
            title: SECTION_NAMES[1].name.en,
            experience: [
                {
                    title: <React.Fragment>Clinical trials:</React.Fragment>,
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
                    title: <React.Fragment>Pharmaceuticals:</React.Fragment>,
                    areas: [
                        <React.Fragment>summaries of product characteristics</React.Fragment>,
                        <React.Fragment>patient leaflets</React.Fragment>,
                        <React.Fragment>training materials</React.Fragment>,
                        <React.Fragment>presentation materials</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Medical devices:</React.Fragment>,
                    areas: [
                        <React.Fragment>instructions for use</React.Fragment>,
                        <React.Fragment>operating manuals</React.Fragment>,
                        <React.Fragment>installation manuals</React.Fragment>,
                        <React.Fragment>package inserts</React.Fragment>,
                        <React.Fragment>software</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Other:</React.Fragment>,
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
                text: SECTION_NAMES[3].name.en,
                target: 'contact'
            }
        },
        rates: {
            title: SECTION_NAMES[2].name.en,
            pricing: {
                title: [
                    'Translation:',
                    'Revision:'
                ],
                units: [
                    {
                        name: <React.Fragment>Rate per word:</React.Fragment>,
                        price: [
                            <React.Fragment>0.08&nbsp;EUR</React.Fragment>,
                            <React.Fragment>0.04&nbsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Rate per page*:</React.Fragment>,
                        price: [
                            <React.Fragment>20&nbsp;EUR</React.Fragment>,
                            <React.Fragment>10&nbsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Hourly rate:</React.Fragment>,
                        price: [
                            <React.Fragment>20&nbsp;EUR</React.Fragment>,
                            <React.Fragment>20&nbsp;EUR</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Minimum rate:</React.Fragment>,
                        price: [
                            <React.Fragment>20&nbsp;EUR</React.Fragment>,
                            <React.Fragment>20&nbsp;EUR</React.Fragment>
                        ]
                    }
                ],
                footnote: <React.Fragment>*250&nbsp;words</React.Fragment>
            },
            button: {
                text: SECTION_NAMES[3].name.en,
                target: 'contact'
            }
        },
        contact: {
            title: SECTION_NAMES[3].name.en,
            body: <React.Fragment>If you need my help in translating a text or require linguistic support of any kind,
                please do not hesitate to contact me at:</React.Fragment>,
            email: <a href="mailto:katarzyna.drobnik@gmail.com">katarzyna.drobnik@gmail.com</a>,
            callToAction: {
                text: <React.Fragment>I’ll be happy to answer any questions you might have. Just drop me a line.</React.Fragment>
            }
        },
        copyrightNote: {
            main: <React.Fragment>&copy; 2022 Łukasz Drobnik</React.Fragment>,
            secondary: <React.Fragment>Background photo by Louisa Howard</React.Fragment>
        },
        dataNotice: {
            message: <div>This website collects basic information about user preferences (language selection).</div>,
            button: 'I understand'
        }
    },
    pl: {
        title: 'Katarzyna Drobnik - tłumaczka medyczna języka angielskiego',
        navbar: {
            lang: 'EN'
        },
        topBanner: {
            title: <React.Fragment><span className="degree">dr&nbsp;n.&nbsp;med.</span><br/>Katarzyna Drobnik</React.Fragment>,
            subtitle: <React.Fragment>Tłumaczenia medyczne z&nbsp;języka angielskiego</React.Fragment>,
            button: {
                text: 'Dowiedz się więcej',
                target: 'about'
            },
            backdropAltText: 'Fotografia erytrocytów wykonana pod mikroskopem elektronowym'
        },
        about: {
            title: SECTION_NAMES[0].name.pl,
            body: <React.Fragment>
                <p>Jestem <strong>tłumaczką języka angielskiego specjalizującą się w&nbsp;medycynie i&nbsp;farmacji</strong>. Dzięki {yearsActive}&#x2011;letniemu doświadczeniu w&nbsp;branży, popartemu wykształceniem przyrodniczym, pomagam
                    klientom w&nbsp;dotarciu do polskojęzycznych odbiorców, dostarczając im rzetelne tłumaczenia o&nbsp;najwyższej jakości.</p>

                <p>Tłumacząc, często korzystam ze swojego wykształcenia. Mam tytuł <strong>magistra biotechnologii</strong> oraz <strong>doktora nauk medycznych</strong>. W&nbsp;ramach pracy doktorskiej badałam związek między zmianami
                    w&nbsp;genie <em>COX-2</em> a&nbsp;rakiem tarczycy.</p>

                <p>Zachęcam do kontaktu.</p>
            </React.Fragment>,
            altText: 'Zdjęcie Katarzyny Drobnik',
            button: {
                text: <React.Fragment>Napisz do mnie</React.Fragment>,
                target: 'contact'
            }
        },
        expertise: {
            title: SECTION_NAMES[1].name.pl,
            experience: [
                {
                    title: <React.Fragment>Badania kliniczne:</React.Fragment>,
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
                    title: <React.Fragment>Farmaceutyki:</React.Fragment>,
                    areas: [
                        <React.Fragment>charakterystyki produktów leczniczych</React.Fragment>,
                        <React.Fragment>ulotki dla pacjenta</React.Fragment>,
                        <React.Fragment>materiały szkoleniowe</React.Fragment>,
                        <React.Fragment>prezentacje</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Wyroby medyczne:</React.Fragment>,
                    areas: [
                        <React.Fragment>instrukcje użytkowania</React.Fragment>,
                        <React.Fragment>podręczniki obsługi</React.Fragment>,
                        <React.Fragment>podręczniki instalacji</React.Fragment>,
                        <React.Fragment>ulotki dołączone do opakowania</React.Fragment>,
                        <React.Fragment>oprogramowanie</React.Fragment>
                    ]
                },

                {
                    title: <React.Fragment>Inne:</React.Fragment>,
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
        },
        rates: {
            title: SECTION_NAMES[2].name.pl,
            pricing: {
                title: [
                    'Tłumaczenie:',
                    'Weryfikacja:'
                ],
                units: [
                    {
                        name: <React.Fragment>Stawka za słowo:</React.Fragment>,
                        price: [
                            <React.Fragment>0.32&nbsp;PLN</React.Fragment>,
                            <React.Fragment>0.16&nbsp;PLN</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Stawka za stronę*:</React.Fragment>,
                        price: [
                            <React.Fragment>80&nbsp;PLN</React.Fragment>,
                            <React.Fragment>40&nbsp;PLN</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Stawka godzinowa:</React.Fragment>,
                        price: [
                            <React.Fragment>80&nbsp;PLN</React.Fragment>,
                            <React.Fragment>80&nbsp;PLN</React.Fragment>
                        ]
                    },
                    {
                        name: <React.Fragment>Stawka minimalna:</React.Fragment>,
                        price: [
                            <React.Fragment>80&nbsp;PLN</React.Fragment>,
                            <React.Fragment>80&nbsp;PLN</React.Fragment>
                        ]
                    }
                ],
                footnote: <React.Fragment>*250&nbsp;słów</React.Fragment>
            },
            button: {
                text: <React.Fragment>Napisz do mnie</React.Fragment>,
                target: 'contact'
            }
        },
        contact: {
            title: SECTION_NAMES[3].name.pl,
            body: <React.Fragment>Jeśli potrzebujesz pomocy w&nbsp;tłumaczeniu tekstu lub innej usługi językowej, napisz
                na adres:</React.Fragment>,
            email: <a href="mailto:katarzyna.drobnik@gmail.com">katarzyna.drobnik@gmail.com</a>,
            callToAction: {
                text: <React.Fragment>Z&nbsp;chęcią odpowiem na wszelkie pytania. Po prostu napisz.</React.Fragment>
            }
        },
        copyrightNote: {
            main: <React.Fragment>&copy; 2022 Łukasz Drobnik</React.Fragment>,
            secondary: <React.Fragment>Zdjęcie w&nbsp;tle: Louisa Howard</React.Fragment>
        },
        dataNotice: {
            message: <div>Strona przechowuje podstawowe informacje na temat preferencji użytkownika (wybór
                języka).</div>,
            button: 'Rozumiem'
        }
    }

};

//Reusable posed component specifying the basic fade-in animation
export const AnimatedBubble = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        transform: 'scale(1, 0)'
    }
});
