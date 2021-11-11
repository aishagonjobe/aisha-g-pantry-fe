import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import auth from "./modules/auth.module"
import pantry from "./modules/pantry.module"
import recipe from "./modules/recipe.module"
import user from "./modules/user.module"

const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }
    return next(action)
}

const middlewareEnhancer = applyMiddleware(asyncMiddleware, logger)
const rootReducer = combineReducers({auth, pantry, recipe, user})
const store = createStore(rootReducer, middlewareEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);