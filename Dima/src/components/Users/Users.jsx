import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../accets/img/ava.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get("https://home.radiolacattor.ru/test.php").then(response => {
            debugger
            props.setUsers(response.data)
        })
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatarURL != null ? u.avatarURL : userPhoto} className={s.usrsAvatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.loca.location}
                            </div>
                            <div>
                                {u.loca.country}
                            </div>
                        </span>
                       
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;