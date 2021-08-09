import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/reducers/auth-reducers";
import {RootReduxStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapStatePropsType> {

  render() {
    return <Header {...this.props}
                   login={this.props.login}
                   isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = (state: RootReduxStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps,
    {logoutTC})(HeaderContainer)

// types
type MapStatePropsType = {
  login: string | null
  isAuth: boolean
}