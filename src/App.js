import React from 'react';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;