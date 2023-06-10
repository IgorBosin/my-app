import {Select} from "./Select";
import {useState} from "react";

export default {
    title: 'Select stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select
        value={value}
        onChange={setValue}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moskow'},
            {value: '3', title: 'Kiev'},
        ]}/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moskow'},
            {value: '3', title: 'Kiev'},
        ]}/>
}