import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {StoreType} from './redux/state';

type AppPropsType = {
    dispatch: (action: any) => void
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">

            <Header/>
            <Navbar friends={props.store._state.sidebar.friend}/>

            <div className='App-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.store._state.profilePage}
                           dispatch={props.dispatch}
                       />}/>

                <Route exact path='/dialogs'
                       render={() => <Dialogs
                           store={props.store}
                       />}/>
            </div>

        </div>
    )
}

export default App;
