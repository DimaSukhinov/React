import React, {useState} from 'react';
import './App.css';
import {Select} from "./Components/OwnSelect/OwnSelect";

const App = () => {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
    // let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);
    // let [switchOn, setSwitchOn] = useState<boolean>(false);
    let [value, setValue] = useState('2');

    return (
        <div className="App">
            <Select
                title={'Select'}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
                onChange={setValue}/>
        </div>
    );
};

export default App;
