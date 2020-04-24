import React from 'react';
import s from './Sidebar.module.css'

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
        </div>
    )
}

export default Sidebar;
