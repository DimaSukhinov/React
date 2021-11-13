import React from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        fontSize: '20px',
        border: 'solid 1px',
        margin: '10px',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }

    const offStyle = {
        fontSize: '20px',
        border: 'solid 1px',
        margin: '10px',
        padding: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle = {
        marginTop: '20px',
        width: '20px',
        height: '20px',
        border: '1px solid',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return(
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.onChange(false) } }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

export default OnOff