import {useMemo, useState} from "react";
import {ItemType, Select} from "../Select/Select";
import React from "react";

export default {
    title: 'UseMemo Select stories',
    component: Select,
}

const items = [
    {value: '1', title: 'Minsk', population: 44},
    {value: '2', title: 'Moskow', population: 9},
    {value: '3', title: 'Kiev', population: 143},
]
const items2: ItemType[] = [
    {value: '1', title: 'Minsk', population: 44},
    {value: '2', title: 'Moskow', population: 9},
    {value: '3', title: 'Kiev', population: 143},
]

export const Example = () => {
    const [value, setValue] = useState('2')
    const [value2, setValue2] = useState('1')

    const filterItems1 = useMemo(() => {
        console.log('filterItems1')
        return items.filter(el => el.title.includes('M'))
    }, [items])

    const filterItems2 = useMemo((): ItemType[] => {
        console.log('filterItems2')
        return items2.filter(el => el.population > 30)
    }, [items])

    return (
        <div>
            <Select
                value={value}
                log={'select1'}
                onChange={setValue}
                items={filterItems1}/>
            <Select
                value={value2}
                log={'select2'}
                onChange={setValue2}
                items={filterItems2}/>
        </div>
    )
}

