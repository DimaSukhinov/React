import React, {ChangeEvent, useState} from 'react';

const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
            <button onClick={ () => console.log(parentValue)}>save</button>
        </div>
    );
};

export default ControlledInput;