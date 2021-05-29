import React from "react";
import style from './MyPosts.module.css'
import {Post} from "../Post/Post";

export type PostDataType = {
    id: number
    title: string
    likeCounts: number
}

export const MyPosts = (props: any) => {

    const postData = [
        {id: 1, title: 'Уволился с работы, учу JS и REACT!', likeCounts: 22},
        {id: 2, title: 'Учу реакт 1 месяц, летим', likeCounts: 19 },
    ]

    let postElements = postData
        .map(p => <Post id={p.id} title={p.title} likeCounts={p.likeCounts}/>)

    return (
        <div className={style.myPosts}>
            <div className={style.textForm}>
                <textarea/>
                <div className={style.buttons}>
                    <button >SEND</button>
                    <button>DELETE</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}