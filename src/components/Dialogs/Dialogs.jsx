import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sofi</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Max</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Привет!</div>
                <div className={s.message}>Как дела?</div>
                <div className={s.message}>Хорошо!</div>
            </div>
        </div>
    )
}

export default Dialogs; 