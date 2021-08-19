import React from "react";
import {addMessageAC} from "../../redux/reducers/dialogs-reducers";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {RootReduxStateType} from "../../redux/redux-store";

type mapStateToProps = {
  messages: Array<{ id: number; message: string }>
  dialogsItem: Array<{ id: number; name: string }>
  newMessageText: string
}
type mapDispatchToProps = {
  onAddMessage: (newMessageText: string) => void
}

const mapStateToProps = (state: RootReduxStateType): mapStateToProps => {

  return {
    messages: state.messagePage.messages,
    dialogsItem: state.messagePage.dialogs,
    newMessageText: state.messagePage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
  return {
    onAddMessage: (newMessageText: string) => {
      dispatch(addMessageAC(newMessageText))
    }
  }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

