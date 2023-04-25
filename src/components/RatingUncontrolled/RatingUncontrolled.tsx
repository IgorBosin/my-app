import {useState} from "react";

type propsType = {
    defaultValue?: number
    onChange: (value:number)=>void
}

export function RatingUncontrolled(props: propsType) {

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)

    const changeStarValue = (num: number) => {
        setValue(num)
    }

    return (
        <div>
            <Star selected={value > 0} changeStar={() =>{ changeStarValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} changeStar={() =>{ changeStarValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} changeStar={() =>{ changeStarValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} changeStar={() =>{ changeStarValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} changeStar={() =>{ changeStarValue(5); props.onChange(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeStar: () => void // () => changeStarValue(1)
}

function Star(props: StarPropsType) {

    const onClickChangeStarHandler = () => props.changeStar()

    return (
        <span onClick={onClickChangeStarHandler}>
            {(props.selected) ? '★ ' : '☆ '}
        </span>
    )
}
