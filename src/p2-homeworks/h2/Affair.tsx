import React from "react";
import {FilterType} from "./HW2";

type AffairPropsType = {
    id: number
    name: string
    priority: FilterType
    deleteAffairCallback: (id: number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    };// need to fix

    return (
        <div>
            <div>
                {props.name}
                                 /
                <span>{props.priority}</span>
                <span> <button onClick={deleteCallback}>X</button> </span>
            </div>

        </div>
    );
}

export default Affair;
