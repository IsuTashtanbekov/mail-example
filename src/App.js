import React from 'react';
import './App.css'
import Navigate from "./components/Header/Navigate/Navigate";
import Home from './components/Main/Home/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import MarksHoc from "./components/Marks/MarksHoc";
import Condtions from "./components/Main/Home/Conditions/Condtions";


const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/marks' element={<MarksHoc/>}></Route>
                    <Route path='/condtions' element={<Condtions/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;