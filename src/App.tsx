import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import OnOffUncontrolled from "./components/OnOff/OnOffUncontrolled";

function App() {

    let [ratingValue, setRatingValue] = useState<number>(4)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState(true)

    return (
        <div>
            <OnOffUncontrolled/>
            <OnOff onOff={onOff}  setOnOff={setOnOff}/>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<Accordion titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            {/*<AccordionUncontrolled titleValue={'Menu unControlled'}/>*/}
            {/*<AccordionUncontrolled titleValue={'Users unControlled'}/>*/}

            {/*<RatingUncontrolled/>*/}
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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
