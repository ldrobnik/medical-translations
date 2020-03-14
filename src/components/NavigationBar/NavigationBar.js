import React, {useState, useEffect, useContext} from 'react';
import * as actionTypes from '../../store/constants';
import {Navbar, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';


import './NavigationBar.css';

import {SECTION_NAMES, OFFSET_DESKTOP, OFFSET_MOBILE, MOBILE_BREAKPOINT} from '../../data/constants';

import logo from '../../assets/images/logo.svg';
import {store} from "../../store/store";

const NavigationBar = (props) => {

    //global state
    const globalState = useContext(store);
    const {state, dispatch} = globalState;

    //mobile status
    const [isMobile, setIsMobile] = useState(state.isMobile);


    // Specifies whether the nav is expanded
    const [navExpanded, setNavExpanded] = useState(false);

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth); //update the window width state with the current window width

        //set local state for mobile status
        setIsMobile(windowWidth < MOBILE_BREAKPOINT);
        handleIsMobileData(); //update the store with mobile status
    };

    // Lets the store know if the page is displayed on a mobile device
    const handleIsMobileData = () => {

        //change global state for mobile status
        dispatch({
            type: actionTypes.SET_MOBILE,
            payload: isMobile
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
            {/*<Navbar.Brand>*/}
            {/*    <AnchorLink href="#top"*/}
            {/*                offset={scrollOffset}*/}
            {/*                onClick={() => setNavExpanded(false)}*/}
            {/*    >*/}
            {/*        <img*/}
            {/*            src={logo}*/}
            {/*            alt="Logo"*/}
            {/*            width="30"*/}
            {/*            height="30"*/}
            {/*            className="d-inline-block align-top"*/}
            {/*        />*/}
            {/*    </AnchorLink>*/}
            {/*</Navbar.Brand>*/}
            {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
            {/*<Navbar.Collapse>*/}
            {/*    <Nav className="mr-auto">*/}
            {/*        {*/}
            {/*            SECTION_NAMES[props.lang].map((section) => {*/}
            {/*                let linkClass = '';*/}
            {/*                if (section.id === props.active) {*/}
            {/*                    linkClass = 'navLink active'*/}
            {/*                } else {*/}
            {/*                    linkClass = 'navLink'*/}
            {/*                }*/}
            {/*                return (*/}
            {/*                    <AnchorLink*/}
            {/*                        key={section.id}*/}
            {/*                        href={`#${section.id}`}*/}
            {/*                        offset={scrollOffset}*/}
            {/*                        onClick={() => setNavExpanded(false)}*/}
            {/*                        className={linkClass}*/}
            {/*                    >*/}
            {/*                        {section.name}*/}
            {/*                    </AnchorLink>*/}

            {/*                )*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}
        </Navbar>
    );
};

export default NavigationBar;