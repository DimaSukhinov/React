import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () => { setCollapsed(true) } }>Open</button>
            <button onClick={ () => { setCollapsed(false) } }>Close</button>
            {collapsed && <AccordionBody/>}             {/*props.collapsed === false*/}
        </div>
    );
};

export default UncontrolledAccordion;
