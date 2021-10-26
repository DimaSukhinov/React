import React from 'react';

type RatingPropsType = {
    selected: boolean
}

const Star = (props: RatingPropsType) => {

    if (props.selected === true) {
        return (
            <span><b>star </b></span>
        )
    } else {
        return (
            <span>star </span>
        )
    }
}

export default Star;
