import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from "./index";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='App-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}/>}/>

                    <Route exact path='/dialogs' render={() => <Dialogs
                        dialogs={props.state.messagePage.dialogs}
                        messages={props.state.messagePage.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
