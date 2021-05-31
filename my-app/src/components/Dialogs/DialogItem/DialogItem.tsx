import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

type DialogItemType = DialogType

export const DialogItem = (props: DialogItemType) => {

    let dialogURL = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.nav} to={dialogURL}>{props.name}</NavLink>
        </div>
    )
}