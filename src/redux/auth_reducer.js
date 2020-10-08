import {authAPI} from '../api/auth-api';

let initialState = {
    userId: null,
    username: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/SET_IS_AUTH':
        case 'auth/SET_USERNAME':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const actions = {
    setIsAuth: (isAuth) =>
        ({type: 'auth/SET_IS_AUTH', payload: {isAuth}}),
    setUsername: (username) =>
        ({type: 'auth/SET_USERNAME', payload: {username}}),
}

export const signUp = (values) => async (dispatch) => {
    let data = await authAPI.signUp(values);
    if (data) {
        dispatch(actions.setIsAuth(true));
        dispatch(actions.setUsername(values.username));
    } else {
        dispatch(actions.setIsAuth(false));
    }
};

export const login = (username, password) => async (dispatch) => {
    let data = await authAPI.login(username, password);
    if (data) {
        dispatch(actions.setIsAuth(true));
        dispatch(actions.setUsername(username));
    } else {
        dispatch(actions.setIsAuth(false));
    }
};

export default authReducer;