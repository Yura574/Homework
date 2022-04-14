import React from "react";
import {FilterType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    id: number
    name: string
    priority: FilterType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    };
    return (
        <div className={s.affair}>
            <span className={s.name}>{props.name}</span>
            <span className={props.priority}>{props.priority}</span>
            <span> <button  className={s.button} onClick={deleteCallback}>X</button> </span>
        </div>
    );
}

export default Affair;
