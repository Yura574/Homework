import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = {
    data: AffairType
    deleteAffairCallback: (id: number)=> void
    changeFilter: (value: FilterType) => void
}

function Affairs(props: AffairsPropsType) {

    const affair = props.data.map( d => <Affair key={d.id} id={d.id} name={d.name} priority={d.priority} deleteAffairCallback={props.deleteAffairCallback}/>)

    const setAll = () => {props.changeFilter('all')};
    const setHigh = () => {props.changeFilter('high')};
    const setMiddle = () => {props.changeFilter('middle')};
    const setLow = () => {props.changeFilter('low')};


    return (
        <div>
            {affair}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
