import React from "react";
import style from './MyPosts.module.css'
import {PostsType} from "../../../redux/store";
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";


type MyPostsType = {
  posts: Array<PostsType>
  onAddPost: (newPostText: string) => void
}

export const MyPosts = React.memo((props: MyPostsType) => {

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
)

// validateForm
const maxLength10 = maxLengthCreator(5)
const AddNewPostForm = (props: any) => {
  return (
      <form onSubmit={props.handleSubmit} className={style.textForm}>
        <Field component={Textarea}
               placeholder='новый пост...'
               name='newPostText'
               validate={[required, maxLength10]}
        />
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