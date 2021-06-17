import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType, ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducers";
import {MyPosts} from "./MyPosts";

export type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    const onAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostOnChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostOnChange}
                 onAddPost={onAddPost}
                 posts={props.store._state.profilePage.posts}
                 newPostText={props.store._state.profilePage.newPostText}
        />
    )
}