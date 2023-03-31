import React from 'react';
import style from './HomeTitle.module.css'
import Redirect from "../Redirect/Redirect";

const HomeTitle = () => {
    return (
        <div className={style.title}>
            <h1 className={style.titleText}>
                Кыргыз почтасы
            </h1>
            <h3 className={style.description}>
                Национальная почтовая сеть Кыргызской Республики 📨
            </h3>
            <Redirect/>
        </div>
    );
};

export default HomeTitle;

