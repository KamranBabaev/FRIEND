
type actionType = followType | unFollowType | setUsersType

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

type UsersType = {
    users: Array<UserType>
}

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    fullName: string
    avatar: string
    followed: boolean
    status: string
    location: LocationType
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SET-USERS'

const initialState = {
    users: [
        {
            id: 1,
            fullName: 'Kamran Babaev',
            avatar: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
            followed: true,
            status: 'Student',
            location: {city: 'Saint-Petersburg', country: 'Russia'}
        },
        {
            id: 2,
            fullName: 'Alexey Petrov',
            avatar: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
            followed: true,
            status: 'Student',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            fullName: 'Petr Vasiliev',
            avatar: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
            followed: true,
            status: 'Student',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ],
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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SETUSERS, users})

