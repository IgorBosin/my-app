import React, {useState} from 'react';

type OnOffPropsType = {
    onOff: boolean
    setOnOff: (onOff: boolean) => void
}

export const OnOffSecret = (props: OnOffPropsType) => {
    console.log('render OnOff')
    const onStyle = {
        padding: '3px',
        background: props.onOff ? "green" : "white",
        display: "inline-block",
    }

    const offStyle = {
        padding: '3px',
        background: props.onOff ? "white" : "red",
        display: "inline-block",
        marginLeft: '3px',
    }

    const indicatorStyle = {
        background: props.onOff ? "green" : "red",
        width: '12px',
        height: '12px',
        border: 'solid black thin',
        borderRadius: '6px',
        display: "inline-block",
        marginLeft: '3px',
    }

    const block = {
        display: "inline-block",
    }

    const onClickHandler = () => {
        props.setOnOff(!props.onOff)
    }

    return (
        // <div>
        <div style={block} onClick={onClickHandler}>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            {/*<div style={onStyle} onClick={()=>props.setOnOff(true)}>ON</div>*/}
            {/*<div style={offStyle} onClick={()=>props.setOnOff(false)}>OFF</div>*/}
            <div style={indicatorStyle}></div>
        </div>

    );
};
export const OnOff = React.memo(OnOffSecret)