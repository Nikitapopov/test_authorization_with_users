import {authAPI} from '../api/auth-api';

let initialState = {
    userId: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'sn/auth/SET_AUTH_USER_DATA':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const actions = {
    setAuthUserData: (userId, email, login, isAuth) =>
        ({type: 'sn/auth/SET_AUTH_USER_DATA', payload: {userId, email, login, isAuth}}),
}

export const signUp = (username, password) => async (dispatch) => {
    let data = await authAPI.signUp(username, password);
    // if (data.resultCode === ResultCodeEnum.Success) {
    //     let {id, login, email} = data.data;
    //     dispatch(actions.setAuthUserData(id, email, login, true));
    // }
};

export const login = (username, password) => async (dispatch) => {
    let data = await authAPI.login(username, password);
    console.log(data)
    // if (data.resultCode === ResultCodeEnum.Success) {
    //     let {id, login, email} = data.data;
    //     dispatch(actions.setAuthUserData(id, email, login, true));
    // }
};

export const getAuthUserData = () => async (dispatch) => {
    // let data = await authApi.getAuthUserData();
    // if (data.resultCode === ResultCodeEnum.Success) {
    //     let {id, login, email} = data.data;
    //     dispatch(actions.setAuthUserData(id, email, login, true));
    // }
};

export const initializeApp = () => async (dispatch) => {
    // let data = await authApi.getAuthUserData();
    // if (data.resultCode === ResultCodeEnum.Success) {
    //     let {id, login, email} = data.data;
    //     dispatch(actions.setAuthUserData(id, email, login, true));
    // }
};
// export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
//     let data = await authApi.login(email, password, rememberMe, captcha);
//     if (data.resultCode === ResultCodeEnum.Success) {
//         dispatch(getAuthUserData());
//     } else {
//         if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
//             dispatch(getCaptchaUrl());
//         }
//         let message = data.messages.length > 0 ? data.messages : 'Some error';
//         dispatch(stopSubmit('login', {_error: message}));
//     }
// };
// export const logout = () => async (dispatch) => {
//     let response = await authApi.logout();
//     if (response.data.resultCode === 0) {
//         dispatch(actions.setAuthUserData(null, null, null, false));
//     }
// };

export default authReducer;