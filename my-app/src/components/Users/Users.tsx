import {UserType} from "../../redux/reducers/users-reducers";
import style from './Users.module.css'
import axios from "axios";
import avatar from './avatarUsers.jpg'

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(resp => props.setUsers(resp.data.items))
        }
    }

    return <div>
        <button onClick={getUsers}>get users</button>
        {
            props.users.map(u => <div className={style.users} key={u.id}>

                    <div className={style.avaAndBtn}>
                        <img src={u.photos.small !== null ? u.photos.small : avatar} alt=''/>
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
                        <div>имя {u.name}</div>
                        <div>{u.status}</div>
                        <div>возраст: 27 лет</div>
                        <div>статус: студент</div>
                        <div>локация: Санкт-Петербург, Россия</div>
                    </div>
                </div>
            )
        }
    </div>
}