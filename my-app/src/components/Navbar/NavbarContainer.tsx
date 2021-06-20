import {SidebarType, StateType} from "../../redux/store";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";

type MapStateType = {
    sidebar: SidebarType
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        sidebar: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps) (Navbar);