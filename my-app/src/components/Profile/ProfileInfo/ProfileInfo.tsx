import React from "react";
import style from './ProfileInfo.module.css'
import avatar from './avatar.jpg'
import {Preloader} from "../../common/Preloader/Preolader";
import {ProfileDataType} from "../ProfileContainer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
  profile: ProfileDataType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const statusWork = () => {
    return (
        props.profile.lookingForAJob
            ? <div>Статус: работаю</div>
            : <div>Статус: в поисках работы</div>
    )
  }

  return (
      <div className={style.profileInfo}>
        <div className={style.user}>
          <img src={avatar}/>
          <div className={style.inform}>
            <div className={style.name}>КАМРАН БАБАЕВ</div>
            <ProfileStatus status='изменение статуса'/>
            <div>возраст: 27 лет</div>
            <div>занятость: студент</div>
            <div>город: Санкт-Петербург, Россия</div>
          </div>
        </div>
        <div className={style.user}>
          <div className={style.inform}>
            <img src={props.profile.photos.small} alt=''/>
            <div className={style.name}>{props.profile.fullName}</div>
            <ProfileStatus status='изменение статуса'/>
            <div className={style.aboutMe}>Обо мне:
              {props.profile.aboutMe}
            </div>
            <div className={style.jobStatus}>
              {statusWork()}
            </div>
            <div className={style.contacts}>
              Мой инстаграмм: {props.profile.contacts.instagram}
            </div>
          </div>
        </div>

      </div>
  )
}