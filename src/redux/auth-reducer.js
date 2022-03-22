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
            debugger;
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

export default authReducer;