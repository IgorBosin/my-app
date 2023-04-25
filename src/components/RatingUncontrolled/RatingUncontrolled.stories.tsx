import React, {useState} from "react";
import {RatingUncontrolled} from "./RatingUncontrolled";
import {action} from "@storybook/addon-actions";

export default {
    title: 'RatingUncontrolled stories',
    component: RatingUncontrolled,
}

const callback = action('change rating clicked')

export const RatingUncontrolledStories0 = () =>  <RatingUncontrolled onChange={callback} defaultValue={0}/>
export const RatingUncontrolledStories1 = () =>  <RatingUncontrolled onChange={callback} defaultValue={1}/>
export const RatingUncontrolledStories2 = () =>  <RatingUncontrolled onChange={callback} defaultValue={2}/>
export const RatingUncontrolledStories3 = () =>  <RatingUncontrolled onChange={callback} defaultValue={3}/>
export const RatingUncontrolledStories4 = () =>  <RatingUncontrolled onChange={callback} defaultValue={4}/>
export const RatingUncontrolledStories5 = () =>  <RatingUncontrolled onChange={callback} defaultValue={5}/>

