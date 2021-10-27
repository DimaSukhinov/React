import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import AppTitle from "./Components/AppTitle";
import { OnOff } from './Components/OnOff/OnOff';

const App = () => {
    return (
        <div className="App">
            {/*<AppTitle/>
            <Rating value={0}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Menu 2'} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff status={true}/>
            <OnOff status={false}/>
        </div>
    );
}

export default App;
