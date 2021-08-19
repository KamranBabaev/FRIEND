import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {RootReduxStateType} from "../../redux/redux-store";
import {initStateSidebarType} from "../../redux/reducers/sidebar-reducers";

type mapStateToPropsType = {
    sidebar: initStateSidebarType
}

const mapStateToProps = (state: RootReduxStateType): mapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps) (Navbar);