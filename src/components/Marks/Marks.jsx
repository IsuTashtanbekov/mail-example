import React from 'react';
import style from './Marks.module.css'

const Marks = ({marks}) => {
    return (
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
                </div>
            ))}
        </div>
    );
};

export default Marks;
