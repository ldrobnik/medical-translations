import React, {useContext} from "react";
import {Container, Row} from "react-bootstrap";
import {WEBSITE_TEXT} from "../../data/constants";
import {store} from '../../store/store';
import './CopyrightNote.css';

const CopyrightNote = () => {

    //global state
    const {state, dispatch} = useContext(store);

    return (
        <div
        className="section lightBackground copyrightNote"
        >
                {WEBSITE_TEXT[state.language].copyrightNote}
        </div>
    );
};

export default CopyrightNote;