import React from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC} from "../../redux/reducers/dialogs-reducers";
import styles from "./Dialogs.module.css";
import {Button, TextField} from "@material-ui/core";

type DialogsType = {
  onAddMessage: (newMessageText: string) => void
  messages: Array<any>
  dialogsItem: Array<any>
}

export const Dialogs = (props: DialogsType) => {

  const dispatch = useDispatch()

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
          <DialogItem dialogsItem={props.dialogsItem}
                      messages={props.messages}
          />
        </div>
        <form onSubmit={formik.handleSubmit}
              className={styles.messageForm}>
          <div className={styles.textForm}>
            <TextField className={styles.inputField}
                       label="новое сообщение..."
                       variant="outlined"
                       name="newMessageText"
                       onChange={formik.handleChange}
                       value={formik.values.newMessageText}
            />
          </div>
          <Button variant="contained" type="submit">
            отправить
          </Button>
        </form>
      </div>
  );
};