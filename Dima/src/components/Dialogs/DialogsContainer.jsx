import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }
                return (
                    <Dialogs addMessage={addMessage}
                             messageChange={onMessageChange}
                             dialogsPage={state}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;