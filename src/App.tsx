import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import AppTitle from "./Components/AppTitle";

const App = () => {
    return (
        <div className="App">
            <AppTitle/>
            <Rating value={0}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Menu 2'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
