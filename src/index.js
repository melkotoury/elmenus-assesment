import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import 'semantic-ui-css/semantic.min.css'
import './stylesheets/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
