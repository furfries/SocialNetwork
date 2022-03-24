import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    };

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
            default:
            return state;
    }
}

export const setAuthUserData = (login, email, id) => ({type: SET_USER_DATA, data: {login, email, id}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let { login, email, id } = data.data;
            dispatch(setAuthUserData(login, email, id));
        }
    });
}

export default authReducer;