import {useEffect, useState} from "react";
import React from 'react'

export default {
    title: 'UseEffect stories',
}

export const SimpleExample = () => {
    console.log('SimpleExample demo')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render component')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
        </div>
    )
}

export const SetTimeoutExample = () => {
    console.log('UseEffect demo')
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        setInterval(() => {
            console.log(counter) // всегда 0, т.к берет counter из замыкания при первой отрисовке
            setCounter((state) => state + 1) // если прописать "counter+1" то берет counter из замыкания - всегда 0
        }, 1000)
    }, [])
    useEffect(() => {
        setTimeout(() => document.title = counter.toString(), 1000)
    })


    let a = new Date()
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setSeconds((state) => state + 1)
        }, 1000)
    }, [])


    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <br/>
            Current Time - {a.getHours()}:{a.getMinutes()}:{a.getSeconds()}
            <br/>
            <h1>Current Time:</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    )
}