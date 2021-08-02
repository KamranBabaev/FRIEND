import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";
import {Field, reduxForm} from "redux-form";

type DialogsType = {
  onAddMessage: (newMessageText: string) => void
  messages: Array<MessageType>
  dialogsItem: Array<DialogType>
}

export const Dialogs = (props: DialogsType) => {

  let dialogsElements = props.dialogsItem
      .map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)

  let messagesElements = props.messages
      .map(m => <Message message={m.message} key={m.id}/>)

  const addNewMessage = (values: any) => {
    props.onAddMessage(values.newMessageText)
  }

  return (
      <>
        <div className={style.dialogs}>

          <div className={style.d_items}>
            {dialogsElements}
          </div>

          <div className={style.messages}>
            {messagesElements}
          </div>

        </div>
        <div className={style.item}>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
      </>
  )
}

export const AddMessageForm = (props: any) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component='textarea'
               name='newMessageText'
               placeholder='введите сообщение...'/>
        <div>
          <button>SEND</button>
        </div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm(
    {form: 'dialogsAddMessageForm'}
)(AddMessageForm)