import React from "react";

type AccordionPropsType = {
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                callback={() => props.setCollapsed(!props.collapsed)}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return <ul>
        <li>1</li>
    </ul>
}

export default Accordion

