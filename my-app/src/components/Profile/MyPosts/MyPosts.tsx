import React from "react";
import style from './MyPosts.module.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <div className={style.textForm}>
                <textarea/>
                <div className={style.buttons}>
                    <button>SEND</button>
                    <button>DELETE</button>
                </div>
            </div>
            <div>
                <Post title='Прокинул пропс через myPosts' likeCounts={22}/>
                <Post title='Учу реакт 1 месяц, летим' likeCounts={19}/>
                <Post title='Начался 2 месяц, летим' likeCounts={8}/>
            </div>
        </div>
    )
}