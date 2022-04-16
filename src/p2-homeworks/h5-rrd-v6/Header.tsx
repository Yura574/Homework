import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages";
import s from './header.module.css'
import arrow from './../../arrow-right.svg'


function Header() {
    return (
        <div className={s.header} >
            <NavLink to={PATH.PRE_JUNIOR}  className={({isActive}) => isActive ? s.active : s.link} >Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link} >Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link}  >Junior+</NavLink>
            <div className={s.arrow}><img src={arrow} alt=""/></div>

        </div>
    )
}

export default Header
