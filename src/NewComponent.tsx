import React from 'react';

type NewComponentType = {
    cars: carsType[]
}

type carsType = {
    manufacturer: string;
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    props.cars.map(function (a) {
        return(
            <li>{a.manufacturer}</li>
        )
    })
    return (
        <div>
            <ul>
                <li>BWM</li>
                <li>m5cs</li>
            </ul>
        </div>
    );
};


