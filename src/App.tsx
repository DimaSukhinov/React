import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './Components/Rating/Rating';
import Accordion from './Components/Accordion/Accordion';
import AppTitle from './Components/AppTitle';
import UncontrolledOnOff from './Components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating';
import OnOff from './Components/OnOff/OnOff';
import TrackValueOfUncontrolledInput from './Components/UncontrolledInput/TrackValueOfUncontrolledInput';
import GetValueOfUncontrolledInputByButtonPress
    from './Components/UncontrolledInput/GetValueOfUncontrolledInputByButtonPress';
import ControlledInput from './Components/InputCheckboxSelect/ControlledInput';
import ControlledCheckbox from './Components/InputCheckboxSelect/ControlledCheckbox';
import ControlledSelect from './Components/InputCheckboxSelect/ControlledSelect';
/*import { OnOff } from './Components/OnOff/OnOff';*/

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            {/*<AppTitle/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} onChange={ setCollapsedAccordion } /> {collapsedAccordion.toString()}*/}
            {/*<OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)} }/>*/}
            <Accordion titleValue={'Menu'}
                       onClick={setCollapsedAccordion}
                       value={collapsedAccordion}
                       items={[
                           {title: 'Settings', value: 1},
                           {title: 'News', value: 2},
                           {title: 'Messages',value: 3}
                       ]}/>
            <Accordion titleValue={'Users'}
                       onClick={setCollapsedAccordion}
                       value={collapsedAccordion}
                       items={[
                           {title: 'Dima', value: 1},
                           {title: 'Lena', value: 2},
                           {title: 'Maksim',value: 3}
                       ]}/>
            {/*<UncontrolledRating />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<TrackValueOfUncontrolledInput />*/}
            {/*<GetValueOfUncontrolledInputByButtonPress />*/}
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
        </div>
    );
};

export default App;
