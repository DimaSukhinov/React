import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
    onClick: (value: boolean) => void
    value: boolean
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.value}/>
            {props.value && <AccordionBody/>}            {/*props.collapsed === false*/}
        </div>
    );
};

export default Accordion;
