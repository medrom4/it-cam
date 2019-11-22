import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Алексей' },
        { id: 2, name: 'Дима' },
        { id: 3, name: 'София' },
        { id: 4, name: 'Максим' }
    ]

    let messages = [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Хорошо!' }
    ]

    ///////////////////////////////////

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />);

    //////////////////////////////////////

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs; 