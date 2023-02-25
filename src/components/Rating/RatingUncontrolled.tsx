import {useState} from "react";

export function RatingUncontrolled() {

    let [value, setValue] = useState(2)

    const changeStarValue = (num: number) => {
        setValue(num)
    }

    return (
        <div>
            <Star selected={value > 0} changeStar={() => changeStarValue(1)}/>
            <Star selected={value > 1} changeStar={() => changeStarValue(2)}/>
            <Star selected={value > 2} changeStar={() => changeStarValue(3)}/>
            <Star selected={value > 3} changeStar={() => changeStarValue(4)}/>
            <Star selected={value > 4} changeStar={() => changeStarValue(5)}/>
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
                    {props.selected ? <b> star </b> : 'star '}
        </span>
    )
}
