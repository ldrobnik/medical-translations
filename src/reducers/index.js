import * as actionTypes from '../actions/constants';

const initialState = {
    isMobile: false,
    language: 'en',
    pageLoaded: false,
    activeSection: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            return state;
    }
};

export default reducer;