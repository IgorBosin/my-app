import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";
import {itemsForAccordion1} from "../../App";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('accordion clicked')
const onClickCallback = action('some item was clicked')

export const AccordionUncollapsed = () =>
    <Accordion
        items={itemsForAccordion1}
        titleValue={'Collapsed'}
        setCollapsed={callback}
        collapsed={true}
        onClickItems={onClickCallback}/>
export const AccordionCollapsed = () =>
    <Accordion
        items={itemsForAccordion1}
        titleValue={'Uncollapsed'}
        setCollapsed={callback}
        onClickItems={onClickCallback}
        collapsed={false}/>

export const ChangeCollapsed = () => {
    const [value, setValue] = useState(true)
    return <Accordion
        onClickItems={onClickCallback}
        items={itemsForAccordion1}
        titleValue={'AccordionStory'}
        setCollapsed={setValue}
        collapsed={value}/>
}

