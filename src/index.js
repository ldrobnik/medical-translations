import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from "redux";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reducer from './reducers';
import App from './App';
import { StateProvider } from './store/store';

// const store = createStore(reducer);

const app = (
    <StateProvider>
        <App />
    </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
