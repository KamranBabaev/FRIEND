import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import avatar from './avatar.png'
import {Message} from "../Message/Message";

type DialogItemPropsType = {
  dialogsItem: Array<{ id: number; name: string }>
  messages: Array<{ id: number; message: string }>
}

export const DialogItem = (props: DialogItemPropsType) => {
  let dialogsElements = props.dialogsItem
      .map(d => <Friend id={d.id} name={d.name} key={d.id}/>)
  let messagesElements = props.messages
      .map(m => <Message message={m.message} key={m.id}/>)

  return (
      <div className={style.dialog}>
        <div  className={style.friendItem}>{dialogsElements}</div>
        <div>{messagesElements}</div>
      </div>
  )
}

// component Friend
type FriendPropsType = {
  id: number
  name: string
}

const Friend = (props: FriendPropsType) => {
  let dialogURL = '/dialogs/' + props.id
  return (
      <div>
        <NavLink className={style.nav} to={dialogURL}>
          <img src={avatar}/>
          <div>{props.name}</div>
        </NavLink>
      </div>
  )
}