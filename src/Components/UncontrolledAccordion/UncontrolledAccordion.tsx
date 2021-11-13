import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
    onChange: (col: boolean) => void
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => { setCollapsed(!collapsed)
                props.onChange(true) } }/>
            {collapsed && <AccordionBody/>}
        </div>
    );
};

export default UncontrolledAccordion;
