import {useEffect, useState} from "react";
import React from 'react'

export default {
    title: 'UseEffect stories',
}

export const UseEffect = () => {
    console.log('UseEffect demo')
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