import React from "react";
import style from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.posts.map(p => <Post
        id={p.id} title={p.title} likeCounts={p.likeCounts}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={style.myPosts}>
            <div className={style.textForm}>
                <textarea ref={newPostElement}/>
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