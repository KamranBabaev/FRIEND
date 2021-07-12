import React from "react";
import style from "./Users.module.css";
import avatar from "./user_icon.png";
import {UserType} from "../../redux/reducers/users-reducers";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = []
    for (let i = 1; i <= pagesCount && i < 10; i++) {
        pages.push(i)
    }

    return <div>

        <div className={style.pagination}>
            {
                pages.map(page => {
                    return <span className={props.currentPage === page ? `${style.selectedPage}` : ''}
                                 onClick={(event) => {
                                     props.onPageChanged(page)
                                 }}>
                            {page}
                        </span>
                })
            }
        </div>

        {
            props.users.map(u => <div className={style.users} key={u.id}>

                    <div className={style.avaAndBtn}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : avatar} alt=''/>
                        </NavLink>
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
                        <div>имя: <b>{u.name}</b></div>
                        <div>статус: в поисках работы</div>
                        <div>город: Санкт-Петербург</div>
                    </div>
                </div>
            )
        }
    </div>
}
