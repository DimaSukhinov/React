import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('wants to change')

export const collapsed = () => <Accordion titleValue={'Collapsed'} value={true} onClick={callback} items={[]}/>
export const nunCollapsed = () => <Accordion titleValue={'unCollapsed'} value={false} onClick={callback} items={[
    {title: 'Dima', value: 1},
    {title: 'Lena', value: 2},
    {title: 'Maksim',value: 3}
]}/>
export const ChangingMod = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'ChangingMod'} value={value} onClick={setValue} items={[
        {title: 'Dima', value: 1},
        {title: 'Lena', value: 2},
        {title: 'Maksim',value: 3}
    ]}/>
}