import React from 'react';
import style from './Footer.module.css'
import { CiInstagram } from 'react-icons/ci';
import { ImFacebook2 } from 'react-icons/im';
import { FaTelegram } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.contacts}>
                <button>
                    <a
                        href="https://www.instagram.com/kyrgyzpost.kg/"
                        target='_blank'
                    >
                        Instagram
                        <CiInstagram/>
                    </a>
                </button>
                <button>
                    <a
                        href="https://t.me/kyrgyzpost_bot"
                        target='_blank'
                    >
                        Telegram
                        <FaTelegram/>
                    </a>
                </button>
                <button>
                    <a
                        href="https://m.facebook.com/profile.php?id=100063490813521&_rdr"
                        target='_blank'
                    >
                        Facebook
                        <ImFacebook2/>
                    </a>
                </button>
            </div>
            <div className={style.aboutUs}>
                <p>
                    <ImLocation2/>
                    Кыргызская Республика, г. Бишкек, пр. Чуй, 227
                    приемная: +996 (312) 61 36 07;
                    канцелярия: +996 (312) 61 52 93;
                    факс: +996 (312) 61 21 01
                    +996 (312) 90 17 25;
                </p>
                <p>
                    <span>
                        Copyright 2023 © ОАО "Кыргыз Почтасы
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;