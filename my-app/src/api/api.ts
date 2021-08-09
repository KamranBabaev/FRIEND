import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "f96f3f30-1614-4efb-864a-596256d296ea"
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`)
        .then(resp => resp.data)
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logout() {
    return instance.delete('auth/login')
  },
}

export const profileAPI = {
  getUserByID(userId: string) {
    return instance.get(`profile/${userId}`)
        .then(resp => resp.data)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
        .then(resp => resp.data)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status})
        .then(resp => resp.data)
  }
}