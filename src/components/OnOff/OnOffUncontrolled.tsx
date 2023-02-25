import React, {useState} from 'react';

const OnOffUncontrolled = () => {

    let [on, setOn] = useState(true)

    const onStyle = {
        padding: '3px',
        background: on ? "green" : "white",
        display: "inline-block",
    }

    const offStyle = {
        padding: '3px',
        background: on ? "white" : "red",
        display: "inline-block",
        marginLeft: '3px',
    }

    const indicatorStyle = {
        background: on ? "green" : "red",
        width: '12px',
        height: '12px',
        border: 'solid black thin',
        borderRadius: '6px',
        display: "inline-block",
        marginLeft: '3px',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>

    );
};

export default OnOffUncontrolled;