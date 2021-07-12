import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import searchICON from './searchICON.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>FRND</div>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>

            <div className={style.searchBlock}>
                <img src={searchICON} width={28} height={28} alt=''/>
                <input placeholder='поиск...'/>
            </div>
        </div>
    )
}