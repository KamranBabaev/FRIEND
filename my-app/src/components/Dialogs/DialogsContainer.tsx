import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogs-reducers";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/store";
import {StoreContext} from "../../Store-context";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                    const onAddMessage = () => {
                        store.dispatch(addMessageAC())
                    }

                    const onMessageChange = (text: string) => {
                        let action = updateNewMessageTextAC(text)
                        store.dispatch(action)
                    }

                    return <Dialogs onAddMessage={onAddMessage}
                                    updateNewMessageText={onMessageChange}
                                    messages={store.getState().messagePage.messages}
                                    newMessageText={store.getState().messagePage.newMessageText}
                                    dialogsItem={store.getState().messagePage.dialogs}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}