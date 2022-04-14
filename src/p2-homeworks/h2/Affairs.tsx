import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType
    deleteAffairCallback: (id: number) => void
    changeFilter: (value: FilterType) => void
}

function Affairs(props: AffairsPropsType) {

    const affair = props.data.map(d => <Affair key={d.id} id={d.id} name={d.name} priority={d.priority}
                                               deleteAffairCallback={props.deleteAffairCallback}/>)

    const setAll = () => {
        props.changeFilter('all')
    };
    const setHigh = () => {
        props.changeFilter('high')
    };
    const setMiddle = () => {
        props.changeFilter('middle')
    };
    const setLow = () => {
        props.changeFilter('low')
    };


    return (
        <div className={s.affairs}>
            {affair}
            <div className={s.buttons}>
                <button className={`${s.button} ${s.low}`} onClick={setAll}>All</button>
                <button className={`${s.button} ${s.high}`} onClick={setHigh}>High</button>
                <button className={`${s.button} ${s.middle}`} onClick={setMiddle}>Middle</button>
                <button className={`${s.button} ${s.low}`} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
