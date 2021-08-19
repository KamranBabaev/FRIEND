import React from "react";
import style from "./Users.module.css";
import avatar from "./user_icon.png";
import {UserType} from "../../redux/reducers/users-reducers";
import {NavLink} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preolader";
import {Paginator} from "./Paginator/Paginator";
import {UsersPropsType} from "../../utils/types/types";

export const Users = (props: UsersPropsType) => {

  return <div>
    <Paginator totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={props.onPageChanged}/>

    {
      props.users.map(u => <div className={style.users} key={u.id}>

            <div className={style.avaAndBtn}>
              <NavLink to={'/profile/' + u.id}>
                {props.isFetching ? <Preloader/> : null}
                <img src={u.photos.small !== null ? u.photos.small : avatar}
                     alt=''/>
              </NavLink>
              {
                u.followed
                    ? <button
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                          props.unfollowMode(u.id)
                        }}>
                      unfollow</button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                          props.followMode(u.id)
                        }}
                        style={{background: 'coral'}}>
                      follow</button>
              }
            </div>

            <div className={style.info}>
              <div>имя: <b>{u.name}</b></div>
              <div>статус: в поисках работы</div>
              <div>город: Санкт-Петербург, Россия</div>
            </div>
          </div>
      )
    }
  </div>
}
