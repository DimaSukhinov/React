import React, {useState} from 'react';

const TrackValueOfUncontrolledInput = () => {

    let [value, setValue] = useState('')

    return (
        <div>
            <input onChange={ event => setValue(event.currentTarget.value) } /> - {value}
        </div>
    );
};

export default TrackValueOfUncontrolledInput;