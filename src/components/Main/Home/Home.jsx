import React from 'react';
import style from './Home.module.css'
import HomeTitle from "./HomeTitle/HomeTitle";
import Questions from "./Questions/Questions";
import Partners from "./Partners/Partners";
import ServicesHoc from "./Services/ServicesHoc";
import Header from "../../Header/Header";
import MyDivider from "../../UI/Divider/MyDivider";
import PartnersHoc from "./Partners/PartnersHoc";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeTitle/>
            <MyDivider/>
            <ServicesHoc/>
            <MyDivider/>
            <Questions/>
            <PartnersHoc/>
        </div>
    );
};

export default Home;