import React, {ChangeEvent} from "react";
import style from "./Message.module.css";
import {ActionType, addMessageAC, onMessageOnChangeAC} from "../../../redux/state";

type MessagePropsType = {
    message: string
    dispatch: (action: ActionType) => void
    newMessageText: string
}


export const Message = (props: MessagePropsType) => {

    const addMessage = () => {
        props.dispatch(addMessageAC() )
    }

    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch( onMessageOnChangeAC(text) )
    }

    return (
        <div className={style.messages}>
            <div className={style.item}>
                <textarea value={props.newMessageText} onChange={onMessageOnChange}/>
                <div>
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>
            <div className={style.message}>
                {props.message}
            </div>
        </div>

    )
}