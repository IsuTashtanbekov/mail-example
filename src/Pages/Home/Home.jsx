import React from 'react';
import HomeTitle from "./HomeTitle/HomeTitle";
import MyDivider from "../../components/UI/Divider/MyDivider";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <HomeTitle/>
            <MyDivider/>
            <Services/>
            <MyDivider/>
            <Partners/>
            <MyDivider/>
            <About/>
        </div>
    );
};

export default Home;