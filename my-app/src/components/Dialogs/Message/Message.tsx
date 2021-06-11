import React, {ChangeEvent} from "react";
import style from "./Message.module.css";

type MessagePropsType = {
    message: string
    addMessage: () => void
    addNewMessageText: (newMessageText: string) => void
    newMessageText: string
}

export const Message = (props: MessagePropsType) => {

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewMessageText(event.currentTarget.value)
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