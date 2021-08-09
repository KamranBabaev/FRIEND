import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import searchICON from './searchICON.png'
import {logoutTC} from "../../redux/reducers/auth-reducers";

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
              ? <div>{props.login}
                <button onClick={logoutTC}>log
                  out
                </button>
              </div>
              : <NavLink to={'/Login'}>LOGIN</NavLink>
          }
        </div>

        <div className={style.searchBlock}>
          <img src={searchICON} width={28} height={28} alt=''/>
          <input placeholder='поиск...'/>
        </div>
      </div>
  )
}