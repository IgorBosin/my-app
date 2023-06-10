import {useState} from "react";
import React from 'react'


export default {
    title: 'React.memo',
}
type UsersType = {
    user: string[]
}

const UsersWithoutMemo = (props: UsersType) => {
    console.log('render Users')
    return (
        <div>{props.user.map((el, i) => <div key={i}>{el}</div>)}</div>
    )
}
const Users = React.memo(UsersWithoutMemo)

const CounterWithoutMemo = (props: { counter: number }) => {
    console.log('render Counter')
    return (
        <div>{props.counter}</div>
    )
}
const Counter = React.memo(CounterWithoutMemo)

export const Example1 = () => {
    console.log('render Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Igor', 'Masha', 'Leha'])

    const incCounter = () => {
        setCounter(counter + 1)
    }

    const addUsers = () => {
        const newUser = 'Miha' + new Date().getTime()
        return setUsers([...users, newUser])
    }

    return (
        <div>
            <button onClick={incCounter}>+</button>
            <button onClick={addUsers}>users add</button>
            <Users user={users}/>
            <Counter counter={counter}/>
        </div>
    )
}

