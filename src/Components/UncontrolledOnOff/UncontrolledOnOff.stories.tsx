import React, {useState} from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const ChangingMod = () => {
    const [value, setValue] = useState<boolean>(false)
    return <UncontrolledOnOff onChange={setValue} />
}
