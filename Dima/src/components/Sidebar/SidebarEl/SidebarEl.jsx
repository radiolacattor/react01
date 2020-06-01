import s from "../Sidebar.module.css";
import React from "react";

const SidebarEl = (props) => {

    let user = props.name;

    return (
        <div className={s.friend}>
            <p>{user}</p>
        </div>
    )
}

export default SidebarEl;