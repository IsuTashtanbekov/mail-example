import React from 'react';
import style from './Header.module.css'
import Navigate from "./Navigate/Navigate";

const Header = () => {
    return (
        <header className={style.header}>
            <Navigate/>
        </header>
    );
};

export default Header;