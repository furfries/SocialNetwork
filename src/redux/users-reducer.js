const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
        users : [],
        pageSize : 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
    };

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: {
            return {
                ...state,
               users: action.users
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
               currentPage: action.currentPage,
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
            default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;