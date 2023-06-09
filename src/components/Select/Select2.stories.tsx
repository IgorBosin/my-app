import {Select2} from "./Select2";
import {useState} from "react";

export default {
    title: 'Select stories two',
    component: Select2,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select2
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
    return <Select2
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moskow'},
            {value: '3', title: 'Kiev'},
        ]}/>

}