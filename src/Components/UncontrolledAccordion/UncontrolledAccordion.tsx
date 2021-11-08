import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () => { setCollapsed(!collapsed) } }>Open</button>
            {collapsed && <AccordionBody/>}             {/*props.collapsed === false*/}
        </div>
    );
};

export default UncontrolledAccordion;
