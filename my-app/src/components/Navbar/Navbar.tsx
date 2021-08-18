import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'
import avatar from './icons/avatar.png'
import profile from './icons/profile.svg'
import friends from './icons/friends.svg'
import messages from './icons/messages.svg'
import news from './icons/news.svg'
import music from './icons/music.svg'
import settings from './icons/settings.svg'

export const Navbar = (props: any) => {

    // @ts-ignore
    const friendElements = props.sidebar.friend.map(f => <div className={style.friend} key={f.id}>
        <img src={avatar} alt=''/>
        {f.name}
    </div>)

    return (
        <div className={style.navbar}>
            <div className={style.navbarElements}>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/profile'>
                        <img src={profile} alt=''/>
                        Профиль
                    </NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/users'>
                        <img src={friends} alt=''/>
                        Друзья
                    </NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/dialogs'>
                        <img src={messages} alt=''/>
                        Сообщения
                    </NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/news'>
                        <img src={news} alt=''/>
                        Новости
                    </NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/music'>
                        <img src={music} alt=''/>
                        Музыка
                    </NavLink>
                </div>
                <div className={style.items}>
                    <NavLink activeClassName={style.activeLink} to='/settings'>
                        <img src={settings} alt=''/>
                        Настройки
                    </NavLink>
                </div>
            </div>

            <div className={style.friends}>
                <div className={style.titleFriends}>Друзья онлайн:</div>
                {friendElements}
            </div>

        </div>
    )
}