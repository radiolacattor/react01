import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    let msg = props.msg;

    return (
        <div className={s.message}>{msg}</div>
    )
}

export default Message;