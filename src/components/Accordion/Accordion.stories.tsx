import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('on or off clicked')

export const AccordionUncollapsed = () => <Accordion titleValue={'Collapsed'} setCollapsed={callback} collapsed={true}/>
export const AccordionCollapsed = () => <Accordion titleValue={'Uncollapsed'} setCollapsed={callback} collapsed={false}/>

export const ChangeCollapsed = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'AccordionStory'} setCollapsed={setValue} collapsed={value}/>
}

