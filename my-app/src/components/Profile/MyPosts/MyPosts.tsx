import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {Post} from './Post/Post'
import {addPostAC, onPostOnChangeAC, PostsType} from "../../../redux/state";
import {type} from "os";

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.posts.map(p => <Post
        key={p.id} id={p.id} title={p.title} likeCounts={p.likeCounts}/>)

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(onPostOnChangeAC(text) )
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
                {postElements}
            </div>
        </div>
    )
}