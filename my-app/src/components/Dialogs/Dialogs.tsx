import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>)

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