import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import avatar from './avatar.png'


export const DialogItem = (props: any) => {

    let dialogURL = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.nav} to={dialogURL}>
                <img src={avatar}/>
                {props.name}
            </NavLink>
        </div>
    )
}