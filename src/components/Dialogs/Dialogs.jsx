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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Алексей' id='1' />

                <DialogItem name='Дима' id='2' />

                <DialogItem name='София' id='3' />

                <DialogItem name='Максим' id='4' />

            </div>

            <div className={s.messages}>

                <Message message='Привет!' />

                <Message message='Как дела?' />

                <Message message='Хорошо!' />

            </div>
        </div>
    )
}

export default Dialogs; 