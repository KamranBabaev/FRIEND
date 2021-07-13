import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "02a4a0fe-ec8b-4871-b0ad-555f3e353528"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resp => resp.data)
    },

    getUserByID(userId: string) {
        return instance.get(`profile/` + userId)
            .then(resp => resp.data)
    },

    getMe() {
        return instance.get(`auth/me`)
            .then(resp => resp.data)
    },

    isUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(resp => resp.data)
    },

    isFollow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(resp => resp.data)
    }

}