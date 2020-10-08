import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReducer from './auth_reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import userReducer from './user_reducer';

let rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store