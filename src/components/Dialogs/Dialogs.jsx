import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Sofi
                </div>
                <div className={s.dialog}>
                    Max
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