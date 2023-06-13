import {Select} from "./Select";
import {useState} from "react";

export default {
    title: 'Select stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select
        log={'WithValue'}
        value={value}
        onChange={setValue}
        items={[
            {value: '1', title: 'Minsk', population: 44},
            {value: '2', title: 'Moskow', population: 9},
            {value: '3', title: 'Kiev', population: 143},
        ]}/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        log={'WithoutValue'}
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Minsk', population: 44},
            {value: '2', title: 'Moskow', population: 9},
            {value: '3', title: 'Kiev', population: 143},
        ]}/>
}
