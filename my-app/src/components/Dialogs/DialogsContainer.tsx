import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";
import {Dialogs} from "./Dialogs";
import {FriendType, MessageType, StateType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToProps = {
    messages: Array<MessageType>
    dialogsItem: Array<FriendType>
    newMessageText: string
}

type mapDispatchToProps = {
    onAddMessage: () => void
    updateNewMessageText: (text: string) => void
}

const mapStateToProps = (state: StateType): mapStateToProps => {

    return {
        messages: state.messagePage.messages,
        dialogsItem: state.sidebar.friend,
        newMessageText: state.messagePage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        onAddMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);