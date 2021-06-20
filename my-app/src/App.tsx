import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";


function App() {

    return (
        <div className="App-wrapper">

            <Header/>
            <NavbarContainer />

            <div className='App-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile/>}
                />

                <Route exact path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
            </div>

        </div>
    )
}

export default App;
