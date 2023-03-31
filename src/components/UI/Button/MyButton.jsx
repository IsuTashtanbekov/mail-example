import React from 'react';
import style from './MyButton.module.css'
const MyButton = ({children, onClick, isFetching}) => {
    return (
        <button
            disabled={isFetching}
            className={style.btn}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;