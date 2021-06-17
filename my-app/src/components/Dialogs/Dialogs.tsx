import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";

type DialogsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsType) => {

    let state = props.store.getState().messagePage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)

    const newMessageText = state.newMessageText

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageTextAC(text))
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
                <textarea value={newMessageText} onChange={onMessageChange} placeholder='введите сообщение...'/>
                <div>
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>

        </div>
    )
}