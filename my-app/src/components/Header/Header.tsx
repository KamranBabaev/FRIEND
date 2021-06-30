import React from "react";
import style from './Header.module.css'
import searchICON from './searchICON.png'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>FRND</div>

            <div className={style.searchBlock}>
                <img src={searchICON} width={28} height={28} alt=''/>
                <input placeholder='поиск...'/>
            </div>
        </div>
    )
}