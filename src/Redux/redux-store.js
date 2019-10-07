import {createStore, combineReducers, applyMiddleware} from 'redux';
import messagesPageReducer from './messagesPage-reducer';
import profilePageReducer from './pofilePage-reducer';
import sideBarReducer from './sideBar-reducer';
import usersPageReducer from './usersPage-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

const redusers = combineReducers({
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    sideBarFriends: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;