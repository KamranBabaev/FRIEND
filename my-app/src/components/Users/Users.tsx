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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsersCount(resp.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsersCount(resp.data.totalCount)
            })
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = []
        for (let i = 1; i <= pagesCount && i < 10; i++) {
            pages.push(i)
        }

        return <div>

            <div className={style.pagination}>
                {
                    pages.map(page => {
                        return <span className={this.props.currentPage === page ? `${style.selectedPage}` : ''}
                                     onClick={(event) => {
                                         this.onPageChanged(page)
                                     }}>
                            {page}
                        </span>
                    })
                }
            </div>

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