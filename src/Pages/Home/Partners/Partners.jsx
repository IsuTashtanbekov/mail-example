import React from 'react';
import {useSelector} from "react-redux";
import style from './Partners.module.css'


const Partners = () => {
    const partners = useSelector(state => state.Partners.partners)
    return (
        <div>
        <h1 className={style.titleText}>
        С нами сотрудничают
        </h1>
        <ul className={style.list}>
            {partners.map( p => {
                return <li
                    className={style.item}
                    key={p.url}
                >
                    <img
                        src={p.url}
                        alt=""
                        className={style.img}
                    />
                </li>
            })}
        </ul>
        </div>
    );
};

export default Partners;