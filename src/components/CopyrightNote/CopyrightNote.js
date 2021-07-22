import React, {useContext} from 'react';
import {WEBSITE_TEXT} from '../../data/constants';
import {store} from '../../store/store';
import './CopyrightNote.css';

const CopyrightNote = () => {

    //global state
    const {state, dispatch} = useContext(store);

    return (
        <div
            className="section lightBackground copyrightNote"
        >
            <div
            >
                {WEBSITE_TEXT[state.language].copyrightNote.main}
            </div>
            <div
                className="secondary"
            >
                {WEBSITE_TEXT[state.language].copyrightNote.secondary}
            </div>

        </div>
    );
};

export default CopyrightNote;