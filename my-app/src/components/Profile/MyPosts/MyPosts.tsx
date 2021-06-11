import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    addNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.posts.map(p => <Post
        key={p.id} id={p.id} title={p.title} likeCounts={p.likeCounts}/>)

    const addPost = () => {
        props.addPost()
    }

    let onPostOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostText(event.currentTarget.value)
    }

    return (
        <div className={style.myPosts}>

            <div className={style.textForm}>
                <textarea value={props.newPostText}
                          onChange={onPostOnChange}/>

                <div className={style.buttons}>
                    <button onClick={addPost}>SEND</button>
                    <button>DELETE</button>
                </div>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}