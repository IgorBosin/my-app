import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";
import {itemsForAccordion} from "../../App";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('accordion clicked')
const onClickCallback = action('some item was clicked')

export const AccordionUncollapsed = () =>
    <Accordion
        items={itemsForAccordion}
        titleValue={'Collapsed'}
        setCollapsed={callback}
        collapsed={true}
        onClickItems={onClickCallback}/>
export const AccordionCollapsed = () =>
    <Accordion
        items={itemsForAccordion}
        titleValue={'Uncollapsed'}
        setCollapsed={callback}
        onClickItems={onClickCallback}
        collapsed={false}/>

export const ChangeCollapsed = () => {
    const [value, setValue] = useState(true)
    return <Accordion
        onClickItems={onClickCallback}
        items={itemsForAccordion}
        titleValue={'AccordionStory'}
        setCollapsed={setValue}
        collapsed={value}/>
}

