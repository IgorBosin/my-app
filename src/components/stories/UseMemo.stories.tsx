import {ChangeEvent, useMemo, useState} from "react";
import React from 'react'

export default {
    title: 'UseMemo stories',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)
    // let resultA = 1
    let resultB = 1

    let resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 1
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResult = i * tempResult
        }
        return tempResult
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = i * resultB
    }

    return (
        <div>
            <input onChange={(e) => setA(+e.currentTarget.value)}/>
            <input onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            result for A : {resultA} <br/>
            result for B : {resultB}
        </div>
    )
}