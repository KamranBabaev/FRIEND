import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {PostsType} from "../../../redux/store";
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";


type MyPostsType = {
  posts: Array<PostsType>
  onAddPost: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsType) => {

  let postElements = props.posts.map(post => <Post key={post.id} id={post.id}
                                                   likeCounts={post.likeCounts}
                                                   title={post.title}/>)

  const addPost = (values: any) => {
    props.onAddPost(values.newPostText)
  }

  return (
      <div className={style.myPosts}>
        <AddNewPostReduxForm onSubmit={addPost}/>
        <div>
          {postElements}
        </div>
      </div>
  )
}

const AddNewPostForm = (props: any) => {
  return (
      <form onSubmit={props.handleSubmit} className={style.textForm}>
        <Field component='textarea'
               placeholder='новый пост...'
               name='newPostText'/>

        <div className={style.buttons}>
          <button>SEND</button>
          <button>DELETE</button>
        </div>
      </form>
  )
}

const AddNewPostReduxForm = reduxForm(
    {form: 'ProfileAddNewPostForm'}
)(AddNewPostForm)