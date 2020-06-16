import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.msg}/>);

    let message = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = message.current.value;
        debugger
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange} ref={message} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;