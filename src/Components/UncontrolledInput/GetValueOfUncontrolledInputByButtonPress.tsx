import React, {useRef, useState} from 'react';

const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>Save</button>
            You write: {value}
        </div>
    );
};

export default GetValueOfUncontrolledInputByButtonPress;
