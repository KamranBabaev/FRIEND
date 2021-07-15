import React from "react";
import {Header} from "./Header";
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import {getAuthUserDataAC} from "../../redux/reducers/auth-reducers";
import {withRouter} from "react-router-dom";
import {RootReduxStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type HeaderContainerPropsType = RouteComponentProps<{ userID?: string }> & {
    getAuthUserDataAC: () => void
}


class HeaderContainer extends React.Component<HeaderContainerPropsType & MapStatePropsType> {

    componentDidMount() {
        this.props.getAuthUserDataAC()
    }

    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: RootReduxStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const withUrlDataContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {getAuthUserDataAC})(withUrlDataContainerComponent)