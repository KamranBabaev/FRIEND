import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";
import {Dialogs} from "./Dialogs";

type DialogsContainer = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainer) => {

    const onAddMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onMessageChange = (text: string) => {
        let action = updateNewMessageTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs onAddMessage={onAddMessage}
                 updateNewMessageText={onMessageChange}
                 messages={props.store._state.messagePage.messages}
                 newMessageText={props.store._state.messagePage.newMessageText}
                 dialogsItem={props.store._state.messagePage.dialogs}
        />
    )
}