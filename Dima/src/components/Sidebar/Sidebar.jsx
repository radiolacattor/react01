import React from 'react';
import s from './Sidebar.module.css'
<<<<<<< HEAD
import SidebarEl from "./SidebarEl/SidebarEl";

const Sidebar = (props) => {
    let usersOnline = props.state.usersOnline.map(u => <SidebarEl name={u.name} id={u.id}/>);

    return (
        <div className={s.friendWrapper}>
            <div className={s.statusFriend}>Online</div>
            {usersOnline}
=======

const Sidebar = (props) => {
    return (
        <div className={s.friendWrapper}>
            <div className={s.statusFriend}>Online</div>
            <div className={s.friend}>
                <p>Dima</p>
            </div>
            <div className={s.friend}>
                <p>Ajnura</p>
            </div>
            <div className={s.friend}>
                <p>Kirill</p>
            </div>
>>>>>>> 04d36e0a8e06ab2bbd258aacbe8ca957c02a267d
        </div>
    )
}

export default Sidebar;
