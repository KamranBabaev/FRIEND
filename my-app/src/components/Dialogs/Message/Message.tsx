import React from "react";
import style from "./Message.module.css";
import {TextField} from "@material-ui/core";

type MessagePropsType = {
  message: string
}

export const Message = (props: MessagePropsType) => {
  return (
      <div className={style.messages}>
        <TextField variant="outlined"
                   value={props.message}
        />
      </div>
  )
}