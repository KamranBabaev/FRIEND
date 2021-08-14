import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "f96f3f30-1614-4efb-864a-596256d296ea"
  }
})

type respGetMeType = {
  resultCode: number
  messages: string[]
  data: {
    id: number | null
    email: string
    login: string
  }
}

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    return await instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  async isUnfollow(id: number) {
    return await instance.delete(`follow/${id}`)
  },
  async isFollow(id: number) {
    return await instance.post(`follow/${id}`, {})
  }
}

export const authAPI = {
  async getMe() {
    return await instance.get<respGetMeType>(`auth/me`)
  },
  async login(email: string, password: string, rememberMe: boolean = false) {
    return await instance.post('auth/login', {email, password, rememberMe})
  },
  async logout() {
    return await instance.delete('auth/login')
  },
}

export const profileAPI = {
  async getUserByID(userId: string) {
    return await instance.get(`profile/${userId}`)
  },
  async getStatus(userId: string) {
    return await instance.get(`profile/status/${userId}`)
  },
  async updateStatus(status: string) {
    return await instance.put(`profile/status`, {status})
  }
}