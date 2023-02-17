import React, {useState} from "react";

export function RatingUncontrolled() {

    let [value, setValue] = useState(0)

    const changeStar = (num: number) => {
        setValue(num)
    }

    return (
        <div>
            <Star selected={value > 0} changeStar={changeStar} current={1}/>
            <Star selected={value > 1} changeStar={changeStar} current={2}/>
            <Star selected={value > 2} changeStar={changeStar} current={3}/>
            <Star selected={value > 3} changeStar={changeStar} current={4}/>
            <Star selected={value > 4} changeStar={changeStar} current={5}/>
            {/*<span onClick={() => onClickChangeStarHandler(1)}><Star selected={value > 0}/></span>*/}
            {/*<span onClick={() => onClickChangeStarHandler(2)}><Star selected={value > 1}/></span>*/}
            {/*<span onClick={() => onClickChangeStarHandler(3)}><Star selected={value > 2}/></span>*/}
            {/*<span onClick={() => onClickChangeStarHandler(4)}><Star selected={value > 3}/></span>*/}
            {/*<span onClick={() => onClickChangeStarHandler(5)}><Star selected={value > 4}/></span>*/}
            {/*<Star selected={value > 0}/> <button onClick={()=>onClickChangeStarHandler(1)}>1</button>*/}
            {/*<Star selected={value > 1}/> <button onClick={()=>onClickChangeStarHandler(2)}>2</button>*/}
            {/*<Star selected={value > 2}/> <button onClick={()=>onClickChangeStarHandler(3)}>3</button>*/}
            {/*<Star selected={value > 3}/> <button onClick={()=>onClickChangeStarHandler(4)}>4</button>*/}
            {/*<Star selected={value > 4}/> <button onClick={()=>onClickChangeStarHandler(5)}>5</button>*/}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeStar: (num: number) => void
    current: number
}

function Star(props: StarPropsType) {

    const onClickChangeStarHandler = (num: number) => {
        props.changeStar(num)
    }
    return (
        props.selected
            ? <span onClick={() => onClickChangeStarHandler(props.current)}><b> star </b></span>
            : <span onClick={() => onClickChangeStarHandler(props.current)}> star </span>
    )
}



