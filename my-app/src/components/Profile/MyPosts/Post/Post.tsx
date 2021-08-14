import React, {MouseEventHandler, useState} from "react";
import style from './Post.module.css'
import avatar from './avatar.jpg'
import liked from './liked.png'
import onLiked from './onLiked.png'
import deleteIcon from './delete.png'

type PostPropsType = {
  id: number
  title: string
  likeCounts: number
  deletePost: (postId: any) => void

}

export const Post = (props: PostPropsType) => {

  const [like, setLike] = useState(false)

  const likeActivateClick = (e: any) => {
    if (!like) {
      setLike(true)
    }
  }
  const likeDeactivateClick = (e: any) => {
    if (like) {
      setLike(false)
    }
  }

  return (
      <div className={style.posts}>
        <img className={style.imgAvatar} alt='' src={avatar}/>
        <div className={style.title}>{props.title}</div>
        <div className={style.likeAndDelete}>
          <div className={style.likesBlock}>
            <img className={style.liked} alt=''
                 onClick={like ? likeDeactivateClick : likeActivateClick}
                 src={like ? liked : onLiked}/>
            {like ? props.likeCounts + 1 : props.likeCounts}
          </div>
          <img src={deleteIcon}
               className={style.deleteIcon}
               onClick={() => props.deletePost(props.id)}
               alt=''/>
        </div>
      </div>
  )
}