import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'
import {FriendType} from "../../redux/state";
import avatar from './avatar.jpg'

type NavbarPropsType = {
    friends: Array<FriendType>
}

export const Navbar = (props: NavbarPropsType) => {

    let friendElements = props.friends.map(f => <div className={style.friend}>
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