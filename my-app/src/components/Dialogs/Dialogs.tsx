import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";
import { Redirect } from "react-router-dom";

type DialogsType = {
    onAddMessage: () => void
    updateNewMessageText: (text: string) => void
    messages: Array<MessageType>
    newMessageText: string
    dialogsItem: Array<DialogType>
    isAuth: boolean
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsItem
        .map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    const addMessage = () => {
        props.onAddMessage()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        props.updateNewMessageText(text)
    }

    if (!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <>
            <div className={style.dialogs}>

                <div className={style.d_items}>
                    {dialogsElements}
                </div>

                <div className={style.messages}>
                    {messagesElements}
                </div>

            </div>
            <div className={style.item}>
                <textarea value={props.newMessageText} onChange={onMessageChange} placeholder='ввод...'/>
                <div>
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>
        </>
    )
}