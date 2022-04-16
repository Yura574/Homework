import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate, Route, Routes } from 'react-router-dom';
import {Junior} from "./pages/Junior_plus";
import {Junior_plus} from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+'
    // add paths
}

function Pages() {

    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<Junior_plus/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
