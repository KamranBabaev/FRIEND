import React from "react";
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div>
                <a>Профиль</a>
            </div>
            <div>
                <a>Сообщения</a>
            </div>
            <div>
                <a>Новости</a>
            </div>
            <div>
                <a>Музыка</a>
            </div>
            <div>
                <a>Настройки</a>
            </div>
        </div>
    )
}