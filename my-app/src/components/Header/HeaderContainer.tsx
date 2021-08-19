import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/reducers/auth-reducers";
import {RootReduxStateType} from "../../redux/redux-store";
import {
  HeaderContainerType,
  MapStatePropsTypeHeaderContainer
} from "../../utils/types/types";

class HeaderContainer extends React.Component<HeaderContainerType> {

  render() {
    return <Header login={this.props.login}
                   isAuth={this.props.isAuth}
                   logoutTC={this.props.logoutTC}/>
  }
}

const mapStateToProps = (state: RootReduxStateType): MapStatePropsTypeHeaderContainer => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps,
    {logoutTC})(HeaderContainer)
