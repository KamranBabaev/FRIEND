import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import searchICON from './searchICON.png'

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
  return (
      <div className={style.header}>
        <div className={style.logo}>FRND</div>
        <div className={style.searchBlock}>
          <img src={searchICON} width={28} height={28} alt=''/>
          <input placeholder='поиск...'/>
        </div>
        <div className={style.loginBlock}>
          {props.isAuth
              ? <div>{props.login}
                <button onClick={props.logoutTC}>
                  выйти
                </button>
              </div>
              : <NavLink to={'/login'}>LOGIN</NavLink>
          }
        </div>
      </div>
  )
}