import React from 'react';
import Sidebar from "./Sidebar";
import StoreContext from "../../storeContext";
import sidebarReducer from "../../redux/sidebarReducer";

const SidebarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return (
                    <Sidebar users={state.sidebar.usersOnline}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;