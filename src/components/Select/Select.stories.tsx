import {Select} from "./Select";
import {itemsForAccordion} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories',
    component: Select,
}

const callback = action('name changed')

export const SelectAnyName = () => {
    return <Select items={itemsForAccordion} setCollapsed={x=>x} collapsed={true}/>
}

export const CollapsedName = () => {
    return <Select items={itemsForAccordion} setCollapsed={x=>x} collapsed={false}/>
}