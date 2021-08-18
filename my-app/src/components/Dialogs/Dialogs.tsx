import React from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC} from "../../redux/reducers/dialogs-reducers";
import styles from "./Dialogs.module.css";

type DialogsType = {
  onAddMessage: (newMessageText: string) => void
  messages: Array<any>
  dialogsItem: Array<any>
}

export const Dialogs = (props: DialogsType) => {

  const dispatch = useDispatch()

  let dialogsElements = props.dialogsItem
      .map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)

  let messagesElements = props.messages
      .map(m => <Message message={m.message} key={m.id}/>)

  const formik = useFormik({
        initialValues: {
          newMessageText: ''
        },

        onSubmit: values => {
          dispatch(addMessageAC(values.newMessageText))
          formik.resetForm()
        },
      }
  )

  return (
      <div className={styles.dialogsBlock}>
        <div className={styles.dialogs}>
          <div className={styles.d_items}>
            {dialogsElements}
          </div>
          <div className={styles.messages}>
            {messagesElements}
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.textForm}>
            <textarea name="newMessageText"
                      onChange={formik.handleChange}
                      value={formik.values.newMessageText}
            />
          </div>
          <button type="submit">отправить</button>
        </form>
      </div>
  );
};