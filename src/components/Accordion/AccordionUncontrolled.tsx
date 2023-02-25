import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function AccordionUncontrolled(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const collapsedBody = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle collapsedBody={collapsedBody} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsedBody: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.collapsedBody()

    return <h3 onClick={onClickHandler}> {props.title} </h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default AccordionUncontrolled