import React from 'react';

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

export default AccordionTitle;
