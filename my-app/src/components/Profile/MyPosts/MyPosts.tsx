import React from "react";
import {Post} from "./Post/Post";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../redux/reducers/profile-reducers";
import styles from './MyPosts.module.css';

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
          dispatch(addPostAC(values.newPostText))
          formik.resetForm()
        },
      }
  )

  return (
      <div className={styles.myPosts}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.textForm}>
            <textarea name="newPostText"
                      onChange={formik.handleChange}
                      value={formik.values.newPostText}
            />
          </div>
          <button type="submit">добавить</button>
        </form>
        <div>
          {postElements}
        </div>
      </div>
  );
};