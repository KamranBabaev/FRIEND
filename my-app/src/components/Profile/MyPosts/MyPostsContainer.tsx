import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducers";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                const onAddPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostOnChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostOnChange}
                                onAddPost={onAddPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}