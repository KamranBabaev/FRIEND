import {UserType} from "../../redux/reducers/users-reducers";
import style from './Users.module.css'

export type UsersPropsType = {
    users: Array<UserType>
}

export const Users = (props: UsersPropsType) => {

    return <div>
        {
            props.users.map(u => <div className={style.users} key={u.id}>

                    <div className={style.avaAndBtn}>
                        <img src={u.avatar} alt=''/>
                        <button>follow</button>
                    </div>

                    <div className={style.info}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            )
        }
    </div>
}