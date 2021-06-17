import React from "react";
import style from './Header.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>FRND</div>
        </div>
    )
}