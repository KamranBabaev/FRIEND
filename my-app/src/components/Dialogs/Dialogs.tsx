import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessagePageType, MessageType} from "../../redux/state";

type DialogsType = {
    dialogs: Array<DialogType>
    messagePage: MessagePageType
    addMessage: () => void
    addNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messagePage.messages
        .map(m => <Message message={m.message}
                           addMessage={props.addMessage}
                           addNewMessageText={props.addNewMessageText}
                           newMessageText={props.messagePage.newMessageText}
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