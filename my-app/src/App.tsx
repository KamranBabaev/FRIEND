import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {

    return (
        <div className="App-wrapper">

            <Header/>
            <NavbarContainer/>

            <div className='App-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile/>}
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
