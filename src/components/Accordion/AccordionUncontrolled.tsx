import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionUncontrolled(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const collapsedBodyHandler = () => {
        setCollapsed(!collapsed)
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3 onClick={collapsedBodyHandler}> {props.title} </h3>
    }

    function AccordionBody() {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}

        </div>
    )
}

export default AccordionUncontrolled