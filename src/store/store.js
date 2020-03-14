import React, {createContext, useReducer} from 'react';
import * as actionTypes from './constants';

const initialState = {
    isMobile: false,
    language: 'en',
    pageLoaded: false,
    activeSection: ''
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case actionTypes.SET_MOBILE:
                return {
                    ...state,
                    isMobile: action.isMobile
                };
            case actionTypes.SET_LANGUAGE:
                return {
                    ...state,
                    language: action.language
                };
            case actionTypes.SET_PAGE_LOADED:
                return {
                    ...state,
                    pageLoaded: action.pageLoaded
                };
            case actionTypes.SET_ACTIVE_SECTION:
                return {
                    ...state,
                    activeSection: action.activeSection
                };
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }