import React, {useState} from 'react';
/*import './OnOff.css';*/

type OnOffPropsType = {
    /*status: boolean*/
}

/*export const OnOff = (props: OnOffPropsType) => {
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
};

export const On = (props: OnOffPropsType) => {
    if (props.status) {
        return (
            <div className={'on'} style={onStyle}>on</div>
        );
    }
    return (
        <div className={'on'}>on</div>
    );
};

const offStyle = {
    backgroundColor: 'red',
};

export const Off = (props: OnOffPropsType) => {
    if (!props.status) {
        return (
            <div className={'off'} style={offStyle}>off</div>
        );
    }
    return (
        <div className={'off'}>off</div>
    );
};

export const StatusOnOff = (props: OnOffPropsType) => {
    if (props.status) {
        return (
            <div className={'status'} style={onStyle}/>
        );
    }
    return (
        <div className={'status'} style={offStyle}/>
    );
};*/

const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        fontSize: '20px',
        border: 'solid 1px',
        margin: '10px',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        fontSize: '20px',
        border: 'solid 1px',
        margin: '10px',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicatorStyle = {
        marginTop: '20px',
        width: '20px',
        height: '20px',
        border: '1px solid',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    return(
        <div>
            <div style={onStyle} onClick={ () => { setOn(true) } }>On</div>
            <div style={offStyle} onClick={ () => { setOn(false) } }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

export default UncontrolledOnOff