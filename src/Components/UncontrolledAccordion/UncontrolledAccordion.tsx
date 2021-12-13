import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={ () => { setCollapsed(!collapsed)} }/>*/}
            <AccordionTitle title={props.titleValue} onClick={ () => { dispatch({type: TOGGLE_COLLAPSED}) }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={ () => props.onClick() }>{props.title}</h3>
    );
};

const AccordionBody = () => {
    return (
        <div className="AccordionBody">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}


export default UncontrolledAccordion;
