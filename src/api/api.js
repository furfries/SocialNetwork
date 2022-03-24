import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'ceb3d733-fc79-41e4-ab2b-1f62c0ac4cb3' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}