import React, {useReducer} from "react";
import {AccordionReducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


function AccordionUncontrolled(props: AccordionPropsType) {

    const [collapsed, dispatch] = useReducer(AccordionReducer, {collaps: false})

    const collapsedBody = () => {
        // setCollapsed(!collapsed)
        dispatch({type: TOGGLE_CONSTANT})
    }

    return (
        <div>
            <AccordionTitle collapsedBody={collapsedBody} title={props.titleValue}/>
            {collapsed.collaps && <AccordionBody/>}
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