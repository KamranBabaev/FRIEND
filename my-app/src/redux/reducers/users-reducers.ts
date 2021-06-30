type actionType = followType | unFollowType | setUsersType | currentPageType | setTotalUsersCountType

type followType = {
    type: 'FOLLOW'
    userID: number
}

type unFollowType = {
    type: 'UNFOLLOW'
    userID: number
}

type setUsersType = {
    type: 'SET-USERS'
    users: UserType[]
}

type currentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

type setTotalUsersCountType = {
    type: 'SET-TOTAL-USERS-COUNT'
    count: number
}

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean

}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersType = initialState, action: actionType): UsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SETUSERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SETUSERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count})

