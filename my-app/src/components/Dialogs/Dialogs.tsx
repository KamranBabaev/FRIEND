import React from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

type DialogsType = {
  onAddMessage: (newMessageText: string) => void
  messages: Array<any>
  dialogsItem: Array<any>
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
          {/*<AddMessageFormRedux onSubmit={addNewMessage}/>*/}
        </div>
      </>
  )
}

const maxLength10 = maxLengthCreator(10)

export const AddMessageForm = (props: any) => {
  return (
      <form onSubmit={props.handleSubmit}>
        {/*<input component={Textarea}*/}
        {/*       name='newMessageText'*/}
        {/*       placeholder='введите сообщение...'*/}
        {/*       validate={[required, maxLength10]}*/}
        {/*/>*/}

        <div>
          <button>SEND</button>
        </div>
      </form>
  )
}