import React from "react";
import style from './DigitalClock.module.css'

type DigitalModeClockType = {
    date: Date
}

const getTimeWith0 = (time: number) => {
    return time < 10 ? '0' + time : time
}

export const DigitalModeClock = () => {
    return (
        <div className={style.container}>
            <span className={style.title}>Digital mode</span> <br/>
            <div className={style.timeContainer}>
                <span>{getTimeWith0(new Date().getHours())}</span>:
                <span>{getTimeWith0(new Date().getMinutes())}</span>:
                <span>{getTimeWith0(new Date().getSeconds())}</span>
            </div>
        </div>
    );
};