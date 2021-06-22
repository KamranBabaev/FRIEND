import {UserType} from "../../redux/reducers/users-reducers";
import style from './Users.module.css'

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
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
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div className={style.users} key={u.id}>

                    <div className={style.avaAndBtn}>
                        <img src={u.avatar} alt=''/>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>

                                : <button onClick={() => {
                                    props.follow(u.id)
                                }} style={{background: 'coral'}}>follow</button>
                        }
                    </div>

                    <div className={style.info}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            )
        }
    </div>
}