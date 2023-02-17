import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import AccordionUncontrolled from "./components/Accordion/AccordionUncontrolled";
import {RatingUncontrolled} from "./components/Rating/RatingUncontrolled";

function App() {
    console.log(Accordion)
    return (
        <div>
            <OnOff/>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            <AccordionUncontrolled titleValue={'Menu unControlled'}/>
            <AccordionUncontrolled titleValue={'Users unControlled'}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <RatingUncontrolled/>
            <RatingUncontrolled/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
