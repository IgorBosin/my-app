import React, {useEffect, useState} from 'react';
import {DigitalModeClock} from "./DigitalModeClock";
import {AnalogModeClock2} from "./AnalogModeClock2";
import style from './Clock.module.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
            console.log('tick')
        }, 1000)
        return () => { // свойство useEffect для умертвления своего содержимого либо перерисовки
            clearInterval(intervalId)
        }
    }, [])

    const setChangeMode = () => {
        setMode(!mode)
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <span className={style.but} onClick={setChangeMode} ><span>Change Mode</span></span>
            </div>
            {/*<button className={style.button}  onClick={setChangeMode}>MODE</button>*/}
            {mode ? <DigitalModeClock/> : <AnalogModeClock2/>}
        </div>
    );
};


