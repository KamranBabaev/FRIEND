import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootReduxStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootReduxStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStatePropsType) => {
        if (!props.isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}