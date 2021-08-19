import React from "react";
import {Post} from "./Post/Post";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../redux/reducers/profile-reducers";
import styles from './MyPosts.module.css';
import {Button, TextField} from "@material-ui/core";

type MyPostsType = {
  posts: Array<any>
  onAddPost: (newPostText: string) => void
  deletePost: (postId: any) => void
}

export const MyPosts = (props: MyPostsType) => {

  const dispatch = useDispatch()

  let postElements = props.posts
      .map(post => <Post key={post.id} id={post.id}
                         likeCounts={post.likeCounts}
                         title={post.title}
                         deletePost={props.deletePost}/>)

  const formik = useFormik({
        initialValues: {
          newPostText: ''
        },

        onSubmit: values => {
          if (values.newPostText.trim().length > 0) {
            dispatch(addPostAC(values.newPostText))
          }
          formik.resetForm()
        },
      }
  )

  return (
      <div className={styles.myPosts}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.textForm}>
            <TextField className={styles.inputField}
                       label="новый пост..."
                       variant="outlined"
                       name="newPostText"
                       onChange={formik.handleChange}
                       value={formik.values.newPostText}
            />
          </div>
          <Button variant="contained"
                  type="submit">добавить</Button>
        </form>
        <div className={styles.blockWithPosts}>
          {postElements}
        </div>
      </div>
  );
};