import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './Components/Rating/Rating';
import Accordion from './Components/Accordion/Accordion';
import AppTitle from './Components/AppTitle';
import UncontrolledOnOff from './Components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating';
import OnOff from './Components/OnOff/OnOff';
/*import { OnOff } from './Components/OnOff/OnOff';*/

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            {/*<AppTitle/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'Menu'} onChange={ setCollapsedAccordion } /> {collapsedAccordion.toString()}

            {/*<OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)} }/>*/}
            {/*<Accordion titleValue={'Menu'} onClick={setCollapsedAccordion} value={collapsedAccordion}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
        </div>
    );
};

export default App;
