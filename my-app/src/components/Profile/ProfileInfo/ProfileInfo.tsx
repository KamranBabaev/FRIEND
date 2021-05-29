import React from "react";
import style from './ProfileInfo.module.css'
import photo from "../content.jpg";

export const ProfileInfo = (props: any) => {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={photo} alt=''/>
            </div>
            <div className={style.description}>
                ава+описание
            </div>
        </div>
    )
}