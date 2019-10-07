import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setUserData = (email, userId, login, isAuth) => ({ type: SET_USER_DATA, data: { email, userId, login, isAuth } });

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.resultCode === 0) {
        const { email, id, login } = response.data;
        dispatch(setUserData(email, id, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(authMe())
    } else {
        const error = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: error }));
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer;