import style from "./AnalogClock2.module.css";
import React from "react";

type AnalogModeClockType = {
    date: Date
}
export const AnalogModeClock2 = () => {

    const seconds = new Date().getSeconds() * 6; // Каждая секунда равна 6 градусам
    const minutes = new Date().getMinutes() * 6; // Каждая минута равна 6 градусам
    const hours = (new Date().getHours() % 12) * 30 + minutes / 12; // Каждый час равен 30 градусам + дополнительные градусы за минуты

    return (
        <div className={style.container}>
            <span className={style.title}>Analog mode</span> <br/>
            <div className={style.clock}>
                <div className={`${style.hour}`}>
                    <div
                        className={`${style.hr}`}
                        style={{transform: `rotateZ(${hours}deg)`}}
                    >
                    </div>
                </div>
                <div className={`${style.min}`}>
                    <div
                        className={`${style.mn}`}
                        style={{transform: `rotateZ(${minutes}deg)`}}
                    >
                    </div>
                </div>
                <div className={`${style.sec}`}>
                    <div
                        className={`${style.sc}`}
                        style={{transform: `rotateZ(${seconds}deg)`}}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
};