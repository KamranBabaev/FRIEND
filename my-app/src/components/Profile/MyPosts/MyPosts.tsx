import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {PostsType} from "../../../redux/store";
import {Post} from "./Post/Post";


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    onAddPost: () => void
}

export const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(post => <Post key={post.id} id={post.id} likeCounts={post.likeCounts} title={post.title}/>)

    const addPost = () => {
        props.onAddPost()
    }

    const onPostOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.myPosts}>

            <div className={style.textForm}>
                <textarea value={props.newPostText}
                          onChange={onPostOnChange}
                />

                <div className={style.buttons}>
                    <button onClick={addPost}>SEND</button>
                    <button>DELETE</button>
                </div>
            </div>

            <div>
                { postElements }
            </div>

        </div>
    )
}