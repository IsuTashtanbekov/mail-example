import React from 'react';
import style from './Navigate.module.css'
import Logo from "../../UI/Logo/Logo";
import Link from "../Link/Link";

const Navigate = () => {
    return (
        <nav className={style.navbar}>
            <Logo/>
            <Link/>
        </nav>
    );
};

export default Navigate;