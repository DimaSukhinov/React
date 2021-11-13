import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './Components/Rating/Rating';
import Accordion from "./Components/Accordion/Accordion";
import AppTitle from "./Components/AppTitle";
import UncontrolledOnOff from './Components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating';
import OnOff from './Components/OnOff/OnOff';
/*import { OnOff } from './Components/OnOff/OnOff';*/

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)

    return (
        <div className="App">
            {/*<AppTitle/>*/}
            {/*<UncontrolledOnOff />*/}
            <OnOff />
            <Accordion titleValue={'Menu'} onClick={setCollapsedAccordion} value={collapsedAccordion}/>
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<UncontrolledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
}

export default App;
