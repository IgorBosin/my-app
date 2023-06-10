import React, {useCallback} from "react";

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
type AccordionTitlePropsType = {
    title: string
    callback: () => void
}
type AccordionBodyPropsType = {
    items: ItemsType[]
    onClickItems: (value: any) => void
}

function AccordionSecret(props: AccordionPropsType) {
    console.log('render Accordion')

    const col = useCallback(() => props.setCollapsed(!props.collapsed), [props])

    return (
        <div>
            <AccordionTitle
                callback={col}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody onClickItems={props.onClickItems} items={props.items}/>}
        </div>
    )
}

export const Accordion = React.memo(AccordionSecret)

const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('render AccordionTitle')
    //const onClickHandler = () => props.callback()
    return <h3 onClick={props.callback}> {props.title} </h3>
}

const AccordionBody = React.memo(AccordionBodySecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {

    console.log('render AccordionBody')

    return <ul>
        {props.items.map((el, index) => {
            return (
                <li onClick={() => props.onClickItems(el.value)} key={index}>{el.title}</li>
            )
        })}
    </ul>
}

