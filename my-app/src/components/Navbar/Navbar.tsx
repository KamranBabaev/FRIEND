import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'
import avatar from './avatar.jpg'
import {StateType} from "../../redux/store";

export const Navbar = (state: StateType) => {

    const friendElements = state.sidebar.friend.map(f => <div className={style.friend}>
        <img src={avatar} alt=''/>
        {f.name}
    </div>)

    return (
        <div className={style.navbar}>
            <div className={style.navbarElements}>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/profile'>Профиль</NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/dialogs'>Сообщения</NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/news'>Новости</NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/music'>Музыка</NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/settings'>Настройки</NavLink>
                </div>
            </div>

            <div className={style.friends}>
                <div className={style.titleFriends}>friends:</div>
                {friendElements}
            </div>

        </div>
    )
}