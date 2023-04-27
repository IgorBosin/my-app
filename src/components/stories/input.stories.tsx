import React, {useRef, RefObject, useState} from "react";

export default {
    title: 'Input',
    // component: OnOff,
}

export const UncontrolledInput = () => <input/>
export const GetValueOfUncontrolledInputUsingOnChange = () => {
    const [value, setValue] = useState('')
    return <> <input onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> - {value}</>
}
export const GetValueOfUncontrolledInputUsingUseRef = () => {
    const [value, setValue] = useState('')
    const inputRef: RefObject<HTMLInputElement> = useRef(null)
    const onClickHandler = () => {
        if (inputRef.current) {                          // 1 вариант
            setValue(inputRef.current.value)             // 1 вариант
        }                                                // 1 вариант
        const el = inputRef.current as HTMLInputElement  // 2 вариант
        setValue(el.value)                               // 2 вариант
    }
    return <> <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button>
        - actual value: {value}  </>
}
export const GetValueOfUncontrolledInputUsingGetElementById = () => {
    const [value, setValue] = useState('')
    const onClickHandler = () => {
        const el = document.getElementById('inputId') as HTMLInputElement // иначе воспринимает как HTMLElement
        setValue(el.value)
    }
    return <>
        <input id={'inputId'}/>
        <button onClick={onClickHandler}>save</button>
        - actual value: {value}
    </>
}
export const ControlledInputWithFixedValue = () => <input value={'Igor'}/>
