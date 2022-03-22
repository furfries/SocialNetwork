import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'ceb3d733-fc79-41e4-ab2b-1f62c0ac4cb3' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
};

export const getFollow = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const getUnfollow = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}