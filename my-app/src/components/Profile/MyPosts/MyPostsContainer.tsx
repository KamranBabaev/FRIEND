import React from "react";
import {StateType} from "../../../redux/store";
import {addPostAC, deletePost} from "../../../redux/reducers/profile-reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";


const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
    deletePost: (postId: any) => {
      dispatch(deletePost(postId))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)