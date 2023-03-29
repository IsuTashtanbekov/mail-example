import React from 'react';
import style from './MyModal.module.css'

const MyModal = ({active, setActive, children}) => {
    const rootClasses = [style.modal]
    if (active) {
        rootClasses.push(style.active)
    }
    return (
        <div
            className={rootClasses.join(' ')}
            onClick={e => setActive(false)}
        >
            <div
                className={style.modalContent}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;