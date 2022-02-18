const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
        users : [],
    };

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: {
            return {
                ...state,
               users: [...state.users, ...action.users],
            }
        }
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        }
            default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const  toggleFollowAC= (userId) => ({type: TOGGLE_FOLLOW, userId});

export default usersReducer;