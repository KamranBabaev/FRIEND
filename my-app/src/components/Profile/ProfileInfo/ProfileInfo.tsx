import React from "react";
import style from './ProfileInfo.module.css'
import avatar from './avatar.jpg'
import {Preloader} from "../../common/Preloader/Preolader";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";
import {ProfileDataType} from "../../../utils/types/types";
import ava2 from './avka.png';

type ProfileInfoPropsType = {
  profile: ProfileDataType
  status: string
  userUpdateStatus: (status: string) => void
  getUserStatus: (userId: string) => void
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
          <img src={avatar} alt=''/>
          <div className={style.inform}>
            <div className={style.name}>КАМРАН БАБАЕВ</div>
            <div>статус: неизменяемый статус</div>
            <div>возраст: 27 лет</div>
            <div>занятость: студент</div>
            <div>город: Санкт-Петербург, Россия</div>
          </div>
        </div>
        <div className={style.user}>
          <div className={style.inform}>
            <img src={props.profile.photos.small || ava2} alt=''/>
            <div className={style.name}>{props.profile.fullName}</div>
            <ProfileStatusHooks
                status={props.status}
                userUpdateStatus={props.userUpdateStatus}
                getUserStatus={props.getUserStatus}
            />
            <div className={style.aboutMe}>Обо мне:
              {props.profile.aboutMe || ' не заполнен...'}
            </div>
            <div className={style.jobStatus}>
              {statusWork()}
            </div>
            <div className={style.contacts}>
              Мой инстаграмм: {props.profile.contacts.instagram || ' не заполнен...'}
            </div>
          </div>
        </div>
      </div>
  )
}