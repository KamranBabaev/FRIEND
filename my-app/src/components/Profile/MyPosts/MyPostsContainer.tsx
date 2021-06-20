import React from "react";
import {StateType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducers";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        onAddPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)