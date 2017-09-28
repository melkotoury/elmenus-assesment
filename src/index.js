import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'
import './stylesheets/index.css'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker'


/**
 *  Here we will apply middleware and use redux devtools extension
 * */
const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


ReactDOM.render(
    <Router>
        <Provider store={store}>
        <Route exact path='/' component={App} />
        </Provider>

    </Router>
    // <Provider store={store}>
    //     <App/>
    // </Provider>
    , document.getElementById('root'));
registerServiceWorker();
