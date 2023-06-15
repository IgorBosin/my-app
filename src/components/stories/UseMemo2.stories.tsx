import {useMemo, useState} from "react";
import React from 'react'

export default {
    title: 'UseMemo2 stories',
}

const UsersWithoutMemo = (props: { user: string[] }) => {
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

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Igor', 'Masha', 'Leha'])

    const addUsers = () => {
        const newUser = 'Miha' + new Date().getTime()
        return setUsers([...users, newUser])
    }

    const filterUsers = useMemo(() => users.filter(el => el.toLowerCase().includes('a')), [users])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUsers}>users add</button>
            <Counter counter={counter}/>
            <Users user={filterUsers}/>
        </div>
    )
}