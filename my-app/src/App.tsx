import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";

function App() {

    return (
        <div className="App-wrapper">

            <HeaderContainer/>
            <NavbarContainer/>

            <div className='App-wrapper-content'>
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
            </div>

        </div>
    )
}

export default App;
