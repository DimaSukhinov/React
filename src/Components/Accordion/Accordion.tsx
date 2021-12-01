import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onClick: (value: boolean) => void
    value: boolean
    items: ItemType[] // Array<string>
}

export type ItemType = {
    title: string
    value: any
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.value}/>
            {props.value && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e) => props.onClick(props.value)}>{props.title}</h3>
    );
};

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map( (i, index) => <li onClick={ () => { props.onClick(i.value) } } key={index}>{i.title}</li> )}
        </ul>
    );
};

export default Accordion;
