import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogsDataType = {
    id: number
    name: string
}

export const Dialogs = (props: any) => {

    const dialogsData = [
        {id: 1, name: 'Кларк'},
        {id: 2, name: 'Питер'},
    ]
    let dialogsElements = dialogsData
        .map(d => <DialogItem id={d.id} name={d.name}/>)

    const messagesData = [
        {id: 1, message: 'Хей, привет'},
        {id: 2, message: 'Давай пройдемся?'},
    ]
    let messagesElements = messagesData
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