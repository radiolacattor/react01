import React from 'react';
import s from './Sidebar.module.css'
import SidebarEl from "./SidebarEl/SidebarEl";

const Sidebar = (props) => {

    let usersOnline = props.users.map(u => <SidebarEl key={u.id} name={u.name} id={u.id}/>);

    return (
        <div className={s.friendWrapper}>
            <div className={s.statusFriend}>Online</div>
            {usersOnline}
        </div>
    )
}

export default Sidebar;
