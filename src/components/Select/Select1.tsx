import React, {useRef, useState, FocusEvent, useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {Box} from "@mui/material";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    items: ItemType[]
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

export function Select1Secret(props: SelectPropsType) {
    console.log('render Select1')

    const [header, setHeader] = useState('Name')
    const menuRef = useRef<HTMLDivElement | null>(null)
    const onClickHandler = (title: string) => {
        setHeader(title.toUpperCase())
    }

    const onBlurHandler = (e: FocusEvent<HTMLDivElement, Element>) => {
        props.setCollapsed(false)
    };
    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            if (menuRef.current) {
                if (e.target !== menuRef.current.firstChild) {
                    props.setCollapsed(false)
                }
            }
        }

        document.addEventListener('click', clickHandler)
        return () => {
            document.removeEventListener('click', clickHandler)
        }
    }, [])

    return (
        <Box sx={{width: 120, marginLeft: 'auto', marginRight: 'auto'}}>
            {/*<FormControl fullWidth>*/}
            {/*<InputLabel variant="standard" htmlFor="uncontrolled-native">*/}

            {/*</InputLabel>*/}
            {/*<NativeSelect defaultValue={1}>*/}
            {/*    {props.items.map(el=>{*/}
            {/*        return(*/}
            {/*            <option  onClick={(e) => onClickHandler(el.title)} value={el.value}>{el.title}</option>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</NativeSelect>*/}
            <div ref={menuRef}>
                <div style={{fontWeight: "bold"}} onClick={() => props.setCollapsed(!props.collapsed)}>{header}</div>
                {props.collapsed && props.items.map(i => <option value={i.value}
                                                                 onClick={() => onClickHandler(i.title)}>{i.title}</option>)}
            </div>

            {/*</FormControl>*/}
        </Box>
    )
}

export const Select1 = React.memo(Select1Secret)