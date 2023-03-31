import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../Routes/routes";
import Home from "../Pages/Home/Home";

const AppRouter = () => {
    return (
            <Routes>
                {routes.map( route => {
                    return <Route
                        path={route.path}
                        element={<route.component/>}>
                    </Route>
                })}
                <Route path='*' element={<Home/>}/>
            </Routes>
    );
};

export default AppRouter;