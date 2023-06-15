import {useMemo, useState} from "react";
import React from 'react'

export default {
    title: 'UseState',
}

const generationData = () => {
    console.log('generationData')
    let tempResult = 1
    for (let i = 1; i <= 5; i++) {
        let fake = 1
        while (fake < 10000000) {
            fake++
            let fakeValue = Math.random()
        }
        tempResult = i * tempResult
    }
    return 1
}

export const UseState = () => {
    console.log('useState')
    // const initValue = generationData()
    // const [counter, setCounter] = useState(initValue) // при клике сначала срабатывает тяжелая функция generationData, а потом +1

    // const initValue = useMemo(()=>generationData,[]) // решение, чтоб на каждый клик не зависало

    const [counter, setCounter] = useState(generationData) // еще одно решение. Тяжелая функция generationData срабатывает единожды

    const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}