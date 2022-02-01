import React from "react";
import classes from "./Message.module.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}><img src={props.avatar} alt={'avatar'}/></div>
            <div className={classes.messageWrapper}>
                <div className={classes.post}>
                    <div className={classes.name}> {props.name}</div>
                    <div className={classes.message}>{props.message}</div>
                </div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    );
}

