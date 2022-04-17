import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<any>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = `${date.getHours()} 
    : 
    ${date.getMinutes().length === 1? `${date.getMinutes()}` : date.getMinutes()} 
    :
     ${date.getSeconds() === 1 ? `${date.getSeconds()} 0` : date.getSeconds()}`; // fix with date

    const stringDate = `${date.getFullYear()} : ${date.getMonth()} : ${date.getDay()}  `; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
