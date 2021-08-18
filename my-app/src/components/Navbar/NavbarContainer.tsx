import {connect} from "react-redux";
import {Navbar} from "./Navbar";


const mapStateToProps = (state: any): any => {
    return {
        sidebar: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps) (Navbar);