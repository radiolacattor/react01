import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../accets/img/ava.png'

class Users extends React.Component {
    componentDidMount() {
        axios
            .get("https://home.radiolacattor.ru/users.php").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.uniqueUrlName != null ? u.uniqueUrlName : userPhoto} className={s.usrsAvatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.photos.small}
                            </div>
                            <div>
                                {u.photos.large}
                            </div>
                        </span>

                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users