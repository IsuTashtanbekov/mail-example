import React, {useState} from 'react';
import style from './Services.module.css';
import MyModal from "../../../UI/Modal/MyModal";

const Services = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <h1 className={style.titleText}>Наши услуги</h1>
        <section className={style.servicesSection}>
            {/*<h1 className={style.titleText}></h1>*/}
            {props.services.map((service) => {
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
                        <button
                            className={style.infoBtn}
                            onClick={e => setVisible(true)}
                        >Подробнее</button>
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

