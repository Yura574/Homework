import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: (newName: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
    keyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    total: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, keyPress, total} // деструктуризация пропсов
) => {
    let inputClass
    {error ? inputClass = s.error : inputClass= ''}
    return (
        <div>

            <div>
                 <input value={name} onChange={setNameCallback} onKeyPress={keyPress} className={inputClass} />
                <button onClick={() => addUser(name)}>add</button>
                <span>{totalUsers}</span>
                <div>{error && <span className={s.errorSpan}>{error}</span>}</div>
                <div>{total}</div>
            </div>
            <ul>
                {users.map(u => <li key={u.id}>{u.name}</li>)}
            </ul>


        </div>
    );
}

export default Greeting;
