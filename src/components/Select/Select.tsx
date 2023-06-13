import React, {useState, KeyboardEvent, useEffect, memo} from 'react';
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: any
    population: number
}

type Select2PropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
    log: string
}

export const SelectSecret = (props: Select2PropsType) => {
    console.log(props.log)

    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const howeredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            className={s.item + " " + (howeredItem === i ? s.selected : '')}
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    );
};
export const Select = memo(SelectSecret)