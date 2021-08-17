import React, {Component, ComponentType} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedAppTC} from "./redux/reducers/app-reducers";
import {RootReduxStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preolader";
import {Suspense} from 'react';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));


class App extends Component<PropsType> {

  componentDidMount() {
    this.props.initializedAppTC();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
        <div className="App-wrapper">
          <HeaderContainer/>
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
    )
  }
}

const mapStateToProps = (state: RootReduxStateType) => ({
  initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedAppTC})
)(App)


// types
type MapDispatchToPropsType = {
  initializedAppTC: () => void
}
type MapStateToPropsType = {
  initialized: boolean
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType
