import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">

            <Header/>
            <Navbar friends={props.state.sidebar.friend}/>

            <div className='App-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}/>

                <Route exact path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.messagePage}
                           dispatch={props.dispatch}
                       />}/>
            </div>

        </div>
    )
}

export default App;
