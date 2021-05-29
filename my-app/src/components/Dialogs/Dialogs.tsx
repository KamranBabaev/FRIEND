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

    const messagesData = [
        {id: 1, message: 'Хей, привет'},
        {id: 2, message: 'Давай пройдемся?'},
    ]

    return (
        <div className={style.dialogs}>

            <div className={style.d_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>

            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>

        </div>
    )
}