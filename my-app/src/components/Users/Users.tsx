import {UserType} from "../../redux/reducers/users-reducers";

export type UsersPropsType = {
    users: Array<UserType>
}

export const Users = (props: UsersPropsType) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img/>
                        </div>
                        <div>
                            <button>follow</button>
                        </div>
                    </span>

                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>

                </div>
            )
        }
    </div>
}