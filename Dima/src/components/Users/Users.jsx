import React from "react";
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatarURL: 'https://cdn.ren.tv/cache/960x540/media/img/14/46/144659e6d12aa348c7eae2170d1d6e04f3d2d1da.jpg',
                    followed: true,
                    fullName: 'Dima',
                    status: 'Big boss',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    avatarURL: 'https://cdn.ren.tv/cache/960x540/media/img/14/46/144659e6d12aa348c7eae2170d1d6e04f3d2d1da.jpg',
                    followed: false,
                    fullName: 'Ajnura',
                    status: 'Little miayka',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    avatarURL: 'https://cdn.ren.tv/cache/960x540/media/img/14/46/144659e6d12aa348c7eae2170d1d6e04f3d2d1da.jpg',
                    followed: true,
                    fullName: 'Kirill',
                    status: 'Little boss',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    avatarURL: 'https://cdn.ren.tv/cache/960x540/media/img/14/46/144659e6d12aa348c7eae2170d1d6e04f3d2d1da.jpg',
                    followed: false,
                    fullName: 'Barsik',
                    status: 'Awful cat',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                }
            ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatarURL} className={s.usrsAvatar}/>
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
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;