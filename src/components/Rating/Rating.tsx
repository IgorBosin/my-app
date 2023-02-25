type RatingPropstType = {
    value: number
    setRatingValue: (ratingValue: number) => void
}
export function Rating(props: RatingPropstType) {
    return (
        <div>
            <Star selected={props.value > 0} value={1} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 1} value={2} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 2} value={3} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 3} value={4} setRatingValue={props.setRatingValue}/>
            <Star selected={props.value > 4} value={5} setRatingValue={props.setRatingValue}/>
        </div>
    )
}
type StarPropsType = {
    value: number
    selected: boolean
    setRatingValue: (val:number) => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => props.setRatingValue(props.value)

    return (
        <span onClick={onClickHandler}>{(props.selected) ? <b>star</b> : 'star'} </span>
    )
}
