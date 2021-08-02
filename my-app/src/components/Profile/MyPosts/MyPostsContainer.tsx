import React from "react";
import {StateType} from "../../../redux/store";
import {addPostAC} from "../../../redux/reducers/profile-reducers";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)