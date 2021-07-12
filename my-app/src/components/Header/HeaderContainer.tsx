import React from "react";
import {Header} from "./Header";
import {RouteComponentProps} from "react-router";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/reducers/auth-reducers";
import {withRouter} from "react-router-dom";
import {RootReduxStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type HeaderContainerPropsType = RouteComponentProps<{ userID?: string }> & {
    setAuthUserDataAC: (userID: string | null, email: string | null, login: string | null) => void
}


class HeaderContainer extends React.Component<HeaderContainerPropsType & MapStatePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}
        )
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    let {id, email, login} = resp.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: RootReduxStateType): MapStatePropsType => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

const withUrlDataContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {setAuthUserDataAC})(withUrlDataContainerComponent)