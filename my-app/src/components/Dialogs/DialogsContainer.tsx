import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";
import {Dialogs} from "./Dialogs";
import {FriendType, MessageType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

type mapStateToProps = {
    messages: Array<MessageType>
    dialogsItem: Array<FriendType>
    newMessageText: string
}

type mapDispatchToProps = {
    onAddMessage: () => void
    updateNewMessageText: (text: string) => void
}

const mapStateToProps = (state: any): mapStateToProps => {

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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);
