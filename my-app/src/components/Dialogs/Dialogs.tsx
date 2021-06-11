import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagePageType} from "../../redux/state";

type DialogsType = {
    state: MessagePageType
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}
                           dispatch={props.dispatch}
                           newMessageText={props.state.newMessageText}
        />)

    return (
        <div className={style.dialogs}>

            <div className={style.d_items}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>

        </div>
    )
}