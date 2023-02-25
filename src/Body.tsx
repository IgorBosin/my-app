import React from 'react';

type BodyType = {
    ops: number;
}

export const Body = (props:BodyType) => {
    return (
        <div>
            {props.ops}
        </div>
    );
};

