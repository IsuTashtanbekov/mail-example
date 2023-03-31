import React, {useEffect, useState} from 'react';
import style from './Marks.module.css'
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import MyModal from "../../components/UI/Modal/MyModal";
import MyButton from "../../components/UI/Button/MyButton";
import MyDivider from "../../components/UI/Divider/MyDivider";

const Marks = () => {
    const [visible, setVisible] = useState(false)
    const [currentMark, setCurrentMark] = useState({})
    const marks = useSelector(state => state.Marks.marks )
    // const history = useNavigate() - тут не понадобился
    const onSetCurrentMark = (mark) => {
        setVisible(true)
        setCurrentMark(mark)
    }

    return (
        <>
            <MyDivider/>
        <div className={style.marks}>
            <h1>Отдел почтовой продукции (Кыргыз Маркасы)</h1>
            <h3>Уважаемый гость! Добро пожаловать на сайт, где мы предлагаем полный ассортимент почтовых марок
                Кыргызской Республики! Данные марки были выпущены ОАО " Кыргыз почтасы".
                Вы можете приобрести почтовые марки и иную филателистическую (конверты первого дня, картмаксимумы) в
                Отделе почтовой продукции ОАО "Кыргыз почтасы" по адресу: г.Бишкек, ул. Орозбекова, 1а.
                <p>За более подробной информацией вы можете обращаться по телефонам: <span>+996 312 623929,</span><span>+996 312 623919,</span>
                    <span>+996 312 300468.</span></p>
                <p>График работы с 8.30-17.30.</p>
            </h3>
            {marks.map(mark => (
                <div className={style.mark} key={mark.id}>
                    <img src={mark.image} alt={mark.title}/>
                    <h3>{mark.title}</h3>
                    <p>{mark.description}</p>
                    <p>{mark.price}</p>
                    <p>{mark.availability} в наличии</p>
                    <MyModal active={visible} setActive={setVisible}>
                        <div className={style.info}>
                            <div className={style.image}>
                                <img src={currentMark.image} alt=""/>
                            </div>
                            <div className={style.description}>
                                <h1>{currentMark.title}</h1>
                                <h3>{currentMark.description}</h3>
                                <h4>

                                    <span>
                                       {`Цена: ${currentMark.price}`}
                                    </span>
                                </h4>
                                <h4>
                                    <span>
                                       {`Количество на складе: ${currentMark.availability}`}
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className={style.interaction}>
                            <MyButton>
                                Купить
                            </MyButton>
                        </div>
                    </MyModal>
                    <MyButton
                        onClick={() => onSetCurrentMark(mark)}>
                        Подробнее
                    </MyButton>
                </div>
            ))}
        </div>
        </>
    );
};

export default Marks;
