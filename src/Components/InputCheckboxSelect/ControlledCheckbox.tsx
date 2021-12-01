import React, {ChangeEvent, useState} from 'react';

const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };

    return (
        <div>
            <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
        </div>
    );
};

export default ControlledCheckbox;
