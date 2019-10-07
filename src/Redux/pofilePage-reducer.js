import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';


const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES';

const initialState = {
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 0 },
        { id: '2', message: 'How are you?', likesCount: 13 },
        { id: '3', message: 'It\'s my first post', likesCount: 22 },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.message, likesCount: 0 }],
                newPostText: ''
            };

        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        case SAVE_PHOTO_SUCCES: {
            
            return { ...state, profile: {...state.profile, photos: action.photos}}
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (message) => ({ type: ADD_POST, message });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSucces = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos });

export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getUserProfile(userId);
        dispatch(setProfile(data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const setUserImage = (image) => {
    return async (dispatch) => {
        
        const response = await profileAPI.updateImage(image)
        if (response.resultCode === 0) {
            dispatch(savePhotoSucces(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        
        const response = await profileAPI.saveProfile(profile);
        
        if (response.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('profile', { _error: response.messages[0] }));
            return Promise.reject( response.messages[0]);
        }
    }
}

export default profilePageReducer;