import React from 'react';

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StarPropsType) => {

    return <span onClick={() => props.setValue()}> {props.selected ? <b>star</b> : 'star'} </span>;

    /*return props.selected ? <span><b>star</b></span> : <span>star</span>;

    if (props.selected) {
        return (
            <span><b>star</b></span>
        );
    } else {
        return (
            <span>star</span>
        );
    }*/
};

export default Star;
