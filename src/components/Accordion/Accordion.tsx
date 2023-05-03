import React from "react";

type ItemsType = {
    value: any
    title: string
}

type AccordionPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
    items: ItemsType[]
    onClickItems: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                callback={() => props.setCollapsed(!props.collapsed)}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody onClickItems={props.onClickItems} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.callback()
    return <h3 onClick={onClickHandler}> {props.title} </h3>
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClickItems: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((el, index) => {
            return (
                <li onClick={() => props.onClickItems(el.value)} key={index}>{el.title}</li>
            )
        })}
    </ul>
}

export default Accordion

