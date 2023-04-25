import React, {useState} from "react";
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating ratingValue={0} setRatingValue={x => x}/>
export const Rating1 = () => <Rating ratingValue={1} setRatingValue={x => x}/>
export const Rating2 = () => <Rating ratingValue={2} setRatingValue={x => x}/>
export const Rating3 = () => <Rating ratingValue={3} setRatingValue={x => x}/>
export const Rating4 = () => <Rating ratingValue={4} setRatingValue={x => x}/>
export const Rating5 = () => <Rating ratingValue={5} setRatingValue={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState(2)
    return <Rating ratingValue={rating} setRatingValue={setRating} />
}

