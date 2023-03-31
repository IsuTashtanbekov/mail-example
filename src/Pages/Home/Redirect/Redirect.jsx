import React, {useEffect, useState} from 'react';
import style from './Redirect.module.css';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { BsTelegram } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import MyButton from "../../../components/UI/Button/MyButton";
import {TrackersService} from "../../../API/TrackersService";

const Redirect = () => {
    const [loading, setLoading] = useState(false)
    const [datum, setDatum] = useState([])
    const [value, setValue] = useState([])

    const onSearchTicket = async () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            alert('Ничеге не найдено!!!')
            setTimeout(() => {
                setValue('')
            }, 700)
        }, 1000)
            // try {
            //     const response =  await TrackersService.checkTicket(value)
            //     setDatum(response)
            // } catch (e) {
            //     setTimeout(() => {
            //         console.warn(e.message)
            //         setLoading(false)
            //     },400)
            // }

    }
    console.log(datum)
    // useEffect(() => {
    //     const response = TrackersService.checkTicket('EDEDEDEDE')
    //     setHeader(response.data)
    // }, [])
    // console.log(header)
    const fetching = true
    return (
        <div className={style.redirect}>

            <div className={style.formGroup}>
                <label>Трекинг посылок</label>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    id="input-field"
                    className={style.formControl}
                    placeholder="Введите код пример: RF727913178SG"/>
            </div>
            <MyButton
                onClick={onSearchTicket}
                className={style.btn}
                isFetching={loading}
            >
                {loading
                    ? <p>Загрузка...<BiLoader/></p>
                    : <p>Отследить посылку <HiOutlineViewfinderCircle/></p>
                }
            </MyButton>
            <MyButton className={style.btn}>
                <a href="https://t.me/kyrgyzpost_bot" target='_blank'>Наш телеграм бот </a><BsTelegram/>
            </MyButton>
        </div>
    );
};

export default Redirect;
