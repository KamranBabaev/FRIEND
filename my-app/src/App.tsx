import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {

    return (
        <div className="App-wrapper">

            <Header/>
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
            </div>

        </div>
    )
}

export default App;
