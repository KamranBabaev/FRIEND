import React from "react";
import style from "./Message.module.css";

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={style.messages}>
            <div className={style.item}>
                <textarea ref={newMessageElement}/>
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