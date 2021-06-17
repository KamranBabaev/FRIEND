import React from "react";
import style from "./Message.module.css";

type MessagePropsType = {
    message: string
}


export const Message = (props: MessagePropsType) => {

    return (
        <div className={style.messages}>
            {props.message}
        </div>

    )
}