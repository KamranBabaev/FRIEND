import React from "react";
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.items}>
                <a href='/profile'>Профиль</a>
            </div>
            <div className={style.items}>
                <a>Сообщения</a>
            </div>
            <div className={style.items}>
                <a>Новости</a>
            </div>
            <div className={style.items}>
                <a>Музыка</a>
            </div>
            <div className={style.items}>
                <a>Настройки</a>
            </div>
        </div>
    )
}