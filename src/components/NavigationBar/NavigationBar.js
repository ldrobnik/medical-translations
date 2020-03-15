import React, {useState, useEffect, useContext} from 'react';
import * as actionTypes from '../../store/constants';
import {store} from "../../store/store";
import {Navbar, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/images/logo-blue.svg';

import './NavigationBar.css';

import {SECTION_NAMES, OFFSET_DESKTOP, OFFSET_MOBILE, MOBILE_BREAKPOINT} from '../../data/constants';




const NavigationBar = () => {

    //global state
    const {state, dispatch} = useContext(store);

    //speciifies whether the website is displayed on a mobile device
    const [isMobile, setIsMobile] = useState(state.isMobile);

    // Specifies whether the nav is expanded
    const [navExpanded, setNavExpanded] = useState(false);

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth); //update the window width state with the current window width
        setIsMobile(windowWidth < MOBILE_BREAKPOINT); //set local state for mobile status
        handleIsMobileData(); //update the store with mobile status
    };

    // Lets the store know if the page is displayed on a mobile device
    const handleIsMobileData = () => {

        //change global state for mobile status
        dispatch({
            type: actionTypes.SET_MOBILE,
            isMobile
        });

    };


    //Specifies smooth scroll offset depending on the window width
    const scrollOffset = isMobile ? OFFSET_MOBILE : OFFSET_DESKTOP;


    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange); // Add an event listener to monitor the screen width

        return () => {

            window.removeEventListener('resize', handleWindowSizeChange); //remove the listener when the component unmounts
        }
    });

    useEffect(() => {

        handleIsMobileData();

    }, []);



    return (

        <Navbar
            collapseOnSelect
            onToggle={() => setNavExpanded(!navExpanded)}
            expanded={navExpanded}
            expand="md"
            bg="light"
            variant="light"
            sticky="top"
        >

            <Navbar.Brand>
                <AnchorLink href="#top"
                            offset={scrollOffset}
                            onClick={() => setNavExpanded(false)}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </AnchorLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {
                        SECTION_NAMES.map((section) => {
                            let linkClass = '';
                            if (section.id === state.activeSection) {
                                linkClass = 'navLink active'
                            } else {
                                linkClass = 'navLink'
                            }
                            return (
                                <AnchorLink
                                    key={section.id}
                                    href={`#${section.id}`}
                                    offset={scrollOffset}
                                    onClick={() => setNavExpanded(false)}
                                    className={linkClass}
                                >
                                    {section.name[state.language]}
                                </AnchorLink>

                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;