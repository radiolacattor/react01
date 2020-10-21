import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../accets/img/ava.png'

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://api.radiolacattor.ru/page${this.props.currentPage}/limit${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}
                        onClick={() => this.props.setCurrentPage (p)}>{p}</span>
                    })}
                </div>
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