import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../Dialogs";

type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {

    let dialogURL = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.nav} to={dialogURL}>{props.name}</NavLink>
        </div>
    )
}