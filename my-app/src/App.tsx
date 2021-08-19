import React, {Component, ComponentType, Suspense} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedAppTC} from "./redux/reducers/app-reducers";
import {RootReduxStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preolader";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Login} from "./components/Login/LoginFormik";
import {AppPropsType} from "./utils/types/types";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));


class App extends Component<AppPropsType> {

  componentDidMount() {
    this.props.initializedAppTC();
  }

  render() {

    return (
        <div className="App">
          <HeaderContainer/>
          {!this.props.initialized && <Preloader/>}
          <div className="App-wrapper">
            <NavbarContainer/>
            <div className='App-wrapper-content'>
              <Suspense fallback={<div>Загрузка...</div>}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}
                />
                <Route exact path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route exact path='/users'
                       render={() => <UsersContainer/>}
                />
                <Route exact path='/login'
                       render={() => <Login/>}
                />
              </Suspense>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state: RootReduxStateType) => ({
  initialized: state.app.initialized,
})
export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedAppTC})
)(App)
