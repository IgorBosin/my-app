import style from "./AnalogClock.module.css";
import React from "react";

type AnalogModeClockType = {
    date: Date
}
export const AnalogModeClock = () => {

    const seconds = new Date().getSeconds() * 6; // Каждая секунда равна 6 градусам
    const minutes = new Date().getMinutes() * 6; // Каждая минута равна 6 градусам
    const hours = (new Date().getHours() % 12) * 30 + minutes / 12; // Каждый час равен 30 градусам + дополнительные градусы за минуты

    return (
        <div className={style.clockContainer}>
            <span className={style.title}>Analog mode</span> <br/>
            <div className={`${style.clock}`}>
                <div
                    className={`${style.seconds} ${style.hand}`}
                    style={{transform: `rotateZ(${seconds}deg)`}}
                >
                </div>
                <div
                    className={`${style.minutes} ${style.hand}`}
                    style={{transform: `rotateZ(${minutes}deg)`}}>
                </div>
                <div
                    className={`${style.hours} ${style.hand}`}
                    style={{transform: `rotateZ(${hours}deg)`}}>
                </div>
            </div>
        </div>
    )
};