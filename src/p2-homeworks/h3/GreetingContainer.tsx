import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any
    // const [totalUser, setTotalUser] = useState<number>(0)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value); // need to fix
        setError('')
    };

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        debugger
        if (name === '' && e.charCode === 32) {
            return setError('error')
        }
        if (e.charCode === 13) {
            return addUser()
        }
    }
    const addUser = () => {
        if (name.trim() === '') {
            return setError('error ')
        }
        alert(`Hello ${name}`)
        addUserCallback(name);
        setName('')
    };
    let total = users.length

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            // totalUsers={totalUser}
            keyPress={keyPressHandler}
            total={total}
        />
    );
}

export default GreetingContainer;
