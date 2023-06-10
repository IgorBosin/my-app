import React from "react";

type RatingPropstType = {
    ratingValue: number
    setRatingValue: (ratingValue: number) => void
}

export function RatingSecret(props: RatingPropstType) {
    console.log('render Rating')
    return (
        <div>
            <Star selected={props.ratingValue > 0} value={1} setRatingValue={props.setRatingValue}/>
            <Star selected={props.ratingValue > 1} value={2} setRatingValue={props.setRatingValue}/>
            <Star selected={props.ratingValue > 2} value={3} setRatingValue={props.setRatingValue}/>
            <Star selected={props.ratingValue > 3} value={4} setRatingValue={props.setRatingValue}/>
            <Star selected={props.ratingValue > 4} value={5} setRatingValue={props.setRatingValue}/>
        </div>
    )
}

export const
    Rating = React.memo(RatingSecret)

type StarPropsType = {
    value: number
    selected: boolean
    setRatingValue: (val: number) => void
}

function Star(props: StarPropsType) {
    console.log('render Rating star')
    const onClickHandler = () => props.setRatingValue(props.value)
    return (
        <span onClick={onClickHandler}>
            {(props.selected) ? '★ ' : '☆ '}
        </span>
    )
}
