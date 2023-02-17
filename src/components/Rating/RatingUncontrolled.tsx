import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
}

export function RatingUncontrolled() {

    let [value, setValue] = useState(0)

    const onClickChangeStarHandler = (num:number) => {
        setValue(num)
    }

    return (
        <div>
          <span onClick={()=>onClickChangeStarHandler(1)}><Star selected={value > 0}/></span>
          <span onClick={()=>onClickChangeStarHandler(2)}><Star selected={value > 1}/></span>
          <span onClick={()=>onClickChangeStarHandler(3)}><Star selected={value > 2}/></span>
          <span onClick={()=>onClickChangeStarHandler(4)}><Star selected={value > 3}/></span>
          <span onClick={()=>onClickChangeStarHandler(5)}><Star selected={value > 4}/></span>
            {/*<Star selected={value > 0}/> <button onClick={()=>onClickChangeStarHandler(1)}>1</button>*/}
            {/*<Star selected={value > 1}/> <button onClick={()=>onClickChangeStarHandler(2)}>2</button>*/}
            {/*<Star selected={value > 2}/> <button onClick={()=>onClickChangeStarHandler(3)}>3</button>*/}
            {/*<Star selected={value > 3}/> <button onClick={()=>onClickChangeStarHandler(4)}>4</button>*/}
            {/*<Star selected={value > 4}/> <button onClick={()=>onClickChangeStarHandler(5)}>5</button>*/}
        </div>
    )

    function Star(props: StarPropsType) {
        if (props.selected) {
            return <span><b> star </b></span>
        } else {
            return <span> star </span>
        }
    }
}


