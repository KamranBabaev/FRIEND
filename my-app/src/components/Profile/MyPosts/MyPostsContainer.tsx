import React from "react";
import {addPostAC, deletePost} from "../../../redux/reducers/profile-reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {RootReduxStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: RootReduxStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    },
    deletePost: (postId: string | number) => {
      dispatch(deletePost(postId))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)