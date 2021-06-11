import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {StateType, StoreType} from './redux/state';

type AppPropsType = {
    state: StateType
    addPost: () => void
    addNewPostText: (newPostText: string) => void
    addMessage: () => void
    addNewMessageText: (newPostText: string) => void
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
                           addPost={props.addPost}
                           addNewPostText={props.addNewPostText}/>}/>

                <Route exact path='/dialogs'
                       render={() => <Dialogs
                           dialogs={props.state.messagePage.dialogs}
                           messagePage={props.state.messagePage}
                           addMessage={props.addMessage}
                           addNewMessageText={props.addNewMessageText}
                       />}/>

            </div>
        </div>
    )
}

export default App;


