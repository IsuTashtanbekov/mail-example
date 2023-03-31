import React, {useState} from 'react';
import style from './Services.module.css';
import MyModal from "../../../components/UI/Modal/MyModal";
import {useSelector} from "react-redux";
import MyButton from "../../../components/UI/Button/MyButton";

const Services = (props) => {
    const [visible, setVisible] = useState(false)
    const services = useSelector(state => state.Services.options)
    return (
        <>
            <h1 className={style.titleText}>Наши услуги</h1>
        <section className={style.servicesSection}>
            {services.map((service) => {
                return (
                    <div className={style.serviceBlock}>
                        <div>
                            <img
                                className={style.serviceImage}
                                src={service.icon}
                                alt=""
                            />
                            <h3 className={style.serviceTitle}>{service.title}</h3>
                        </div>
                        <MyButton
                            onClick={e => setVisible(true)}
                        >Подробнее
                        </MyButton>
                        <MyModal active={visible} setActive={setVisible}>
                                инфа о тарифах
                        </MyModal>
                    </div>
                );
            })}
        </section>
        </>
    );
};

export default Services;

