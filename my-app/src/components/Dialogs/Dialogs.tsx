import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state, {DialogType, MessageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";

type DialogsType = {
    onAddMessage: () => void
    updateNewMessageText: (text: string) => void
    messages: Array<MessageType>
    newMessageText: string
    dialogsItem: Array<DialogType>
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsItem
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>)

    const addMessage = () => {
        props.onAddMessage()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogs}>

            <div className={style.d_items}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>

            <div className={style.item}>
                <textarea value={props.newMessageText} onChange={onMessageChange} placeholder='введите сообщение...'/>
                <div>
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>

        </div>
    )
}