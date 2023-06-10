import {Select1} from './Select1';
import {itemsForAccordion1} from "../../App";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories two',
    component: Select1,
}

const callback = action('name changed')

export const SelectAnyName = () => {
    return <Select1 items={itemsForAccordion1} setCollapsed={x => x} collapsed={true}/>
}

export const CollapsedName = () => {
    return <Select1 items={itemsForAccordion1} setCollapsed={x => x} collapsed={false}/>
}