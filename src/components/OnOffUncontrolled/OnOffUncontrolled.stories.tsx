import React, {useState} from "react";
import OnOffUncontrolled from "./OnOffUncontrolled";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOffUncontrolled stories',
    component: OnOffUncontrolled,
}

const callback = action('on or off clicked')

export const OnUncontrolledStories = () => <OnOffUncontrolled defaultOn={true} onChange={callback}/>
export const OffUncontrolledStories = () => <OnOffUncontrolled defaultOn={false} onChange={callback}/>

