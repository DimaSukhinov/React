import React from 'react';
import './OnOff.css';

type OnOffPropsType = {
    status: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={'OnOff'}>
            <On status={props.status}/>
            <Off status={props.status}/>
            <StatusOnOff status={props.status}/>
        </div>
    );
};

const onStyle = {
    backgroundColor: 'green',
}

export const On = (props: OnOffPropsType) => {
    if(props.status) {
        return (
            <div className={'on'} style={onStyle}>on</div>
        );
    }
    return (
        <div className={'on'}>-</div>
    )
}

const offStyle = {
    backgroundColor: 'red',
}

export const Off = (props: OnOffPropsType) => {
    if(!props.status) {
        return (
            <div className={'off'} style={offStyle}>off</div>
        );
    }
    return (
        <div className={'off'}>-</div>
    )
};

export const StatusOnOff = (props: OnOffPropsType) => {
    if(props.status) {
        return (
            <div className={'status'} style={onStyle}/>
        );
    }
    return (
        <div className={'status'} style={offStyle}/>
    );
};
