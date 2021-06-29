import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/reducers/users-reducers";
import {Dispatch} from "redux";
import {RootReduxStateType} from "../../redux/redux-store";
import {Users} from "./Users";

type mapStateType = {
    users: Array<UserType>
}

const mapStateToProps = (state: RootReduxStateType): mapStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },

        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);