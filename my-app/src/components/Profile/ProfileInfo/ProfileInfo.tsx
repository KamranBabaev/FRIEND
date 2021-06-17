import React from "react";
import style from './ProfileInfo.module.css'
import avatar from './avatar.jpg'

export const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <div className={style.user}>
                <img src={avatar}/>
                <div className={style.inform}>
                    <div className={style.name}>КАМРАН БАБАЕВ</div>
                    возраст: 27 лет<br/>город: Санкт-Петербург
                </div>
            </div>
        </div>
    )
}