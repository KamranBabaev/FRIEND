import React, {ComponentType} from "react";
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

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...restProps as T}/>

    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}