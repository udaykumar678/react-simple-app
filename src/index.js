import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import showReducer from './store/reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    appData : showReducer
});

const logger = store => next => action => {
    if(typeof(action) === 'object'){
        console.log(action);
    }
    return next(action);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
