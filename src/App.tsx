import React from 'react';
import './App.css';
import Rating from "./Components/Rating";
import Accordion from "./Components/Accordion/Accordion";
import AppTitle from "./Components/AppTitle";

const App = () => {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
