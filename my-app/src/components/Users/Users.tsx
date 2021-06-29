import React from "react";
import style from "./Users.module.css";
import avatar from "./avatarUsers.jpg";
import axios from "axios";
import {UserType} from "../../redux/reducers/users-reducers";

type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(resp => this.props.setUsers(resp.data.items))
    }

    getUsers = () => {

    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div className={style.users} key={u.id}>

                        <div className={style.avaAndBtn}>
                            <img src={u.photos.small !== null ? u.photos.small : avatar} alt=''/>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>unfollow</button>

                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}