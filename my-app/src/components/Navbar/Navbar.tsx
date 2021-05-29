import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.navbar}>
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
    )
}