import React, {useState} from 'react';

type OnOffPropsType = {

}

const OnOff = (props: OnOffPropsType) => {

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

export default OnOff