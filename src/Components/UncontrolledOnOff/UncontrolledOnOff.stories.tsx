import React from 'react';
import UncontrolledOnOff from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('something clicked')


export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true} />
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false} />