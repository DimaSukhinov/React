import React, {ChangeEvent, useState} from 'react';

const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                <option value={'1'}>none</option>
                <option value={'2'}>Minsk</option>
                <option value={'3'}>Kiev</option>
                <option value={'4'}>Moscow</option>
            </select>
            {parentValue}
        </div>
    );
};

export default ControlledSelect;
