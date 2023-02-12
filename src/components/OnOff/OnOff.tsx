import React from 'react';

type OnOffType = {
    value: boolean
}

const OnOff = (props: OnOffType) => {
    if (props.value) {
        return (
            <div>
                <button className={'green'}>ON</button>
                <button>OFF</button>
            </div>
        )
    } else return(
        <div>
            <button>ON</button>
            <button className={'red'}>OFF</button>
        </div>
    )

}

export default OnOff;