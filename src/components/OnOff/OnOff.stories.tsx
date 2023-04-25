import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from '@storybook/addon-actions'

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('on or off clicked')

export const OffMode = () => <OnOff onOff={false} setOnOff={callback}/>
export const OnMode = () => <OnOff onOff={true} setOnOff={callback}/>

export const ChangeOnOff = () => {
    const [value, setValue] = useState(true)
    return <OnOff onOff={value} setOnOff={setValue} />
}

