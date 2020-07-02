import React from 'react';
import Sidebar from "./Sidebar";
import sidebarReducer from "../../redux/sidebarReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.sidebar.usersOnline
    }
}

// let mapDispatchToProps = (dispatch) =>{
//     return{
//         add: null
//     }
// }

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;