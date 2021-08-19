import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import {HeaderPropsType} from "../../utils/types/types";
import {AppBar, Button, InputBase, Typography} from "@material-ui/core";
import {Search} from "@material-ui/icons";


export const Header = (props: HeaderPropsType) => {
  return (
      <AppBar position="static">
        <div className={style.header}>
          <Typography variant="h6" component="div" className={style.title}>
            FRND
          </Typography>
          <div className={style.search}>
            <div>
              <Search className={style.searchIcon}/>
            </div>
            <InputBase placeholder="поиск…"/>
          </div>
          {
            props.isAuth
                ? <div className={style.loginBlock}>
                  {props.login}
                  <Button className={style.btn}
                          variant="contained"
                          onClick={props.logoutTC}>
                    выйти
                  </Button>
                </div>
                : <NavLink to={'/login'}>LOGIN</NavLink>
          }
        </div>
      </AppBar>
  )
}