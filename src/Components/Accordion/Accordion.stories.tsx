import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('wants to change')

export const collapsed = () => <Accordion titleValue={'Collapsed'} value={true} onClick={callback} />
export const nunCollapsed = () => <Accordion titleValue={'unCollapsed'} value={false} onClick={callback} />
export const ChangingMod = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'ChangingMod'} value={value} onClick={setValue} />
}
