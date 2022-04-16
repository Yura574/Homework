import React, {useReducer} from "react";
import {checkAge, homeWorkReducer, sort} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type PeopleType = {
    _id: number
    name: string
    age: number
}

type InitialPeopleType = PeopleType[]

const initialPeople: InitialPeopleType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    debugger
    const [people, dispatch] = useReducer(homeWorkReducer, initialPeople);
    const finalPeople = people.map(p => (
        <div key={p._id}>
             {p.name} {p.age}
        </div>
    ))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={() => dispatch(sort('up'))}>sort up</SuperButton></div>
            <div><SuperButton onClick={() => dispatch(sort('down'))}>sort down</SuperButton> </div>
            <SuperButton onClick={() => dispatch(checkAge(18))}> check</SuperButton>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
