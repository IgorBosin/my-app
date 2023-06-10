import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import OnOffUncontrolled from "./components/OnOffUncontrolled/OnOffUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import AccordionUncontrolled from "./components/AccordionUncontrolled/AccordionUncontrolled";
import {Select1} from "./components/Select/Select1";
import {Select} from "./components/Select/Select";

export const itemsForAccordion1 = [
    {title: 'Igor', value: 1},
    {title: 'Mary', value: 2},
    {title: 'Leha', value: 3},
]

export const itemsForSelect = [
    {title: 'Moscow', value: 1},
    {title: 'Piter', value: 2},
    {title: 'Perm', value: 3},
]

function App() {
    console.log('render App')

    let [ratingValue, setRatingValue] = useState<number>(4)
    let [selectValue, setSelectValue] = useState<number>(4)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState(true)

    const itemsForAccordion = useMemo(()=>itemsForAccordion1,[])

    const onClickItems = useCallback(() => console.log('on click items'), [])

    return (
        <div>
            {/*<Select1 collapsed={collapsed} setCollapsed={setCollapsed} items={itemsForSelect}/>*/}
            <Select value={selectValue} onChange={setSelectValue} items={itemsForSelect}/>
            <OnOff onOff={onOff}  setOnOff={setOnOff}/>
            <Accordion onClickItems={onClickItems} items={itemsForAccordion} titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            {/*<RatingUncontrolled onChange={setRatingValue}/>*/}
            {/*<AccordionUncontrolled titleValue={'Menu unControlled'}/>*/}
            {/*<AccordionUncontrolled titleValue={'Users unControlled'}/>*/}
            {/*<OnOffUncontrolled onChange={setOnOff}/>*/}
        </div>
    );
}
export default App;
