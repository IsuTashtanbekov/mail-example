import React from 'react';
import style from './Redirect.module.css';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { BsTelegram } from 'react-icons/bs';

const Redirect = () => {
    return (
        <div className={style.redirect}>
            <div className={style.formGroup}>
                <label>Трекинг посылок</label>
                <input type="text" id="input-field" className={style.formControl} placeholder="Введите код пример: RF727913178SG"/>
            </div>
            <button className={style.btn}>
                Отследить посылку <HiOutlineViewfinderCircle/>
            </button>
            <button className={style.btn}>
                <a href="https://t.me/kyrgyzpost_bot" target='_blank'>Наш телеграм бот </a><BsTelegram/>
            </button>
        </div>
    );
};

export default Redirect;
