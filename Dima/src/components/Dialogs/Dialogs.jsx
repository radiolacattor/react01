import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} msg={m.msg}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.messageChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;