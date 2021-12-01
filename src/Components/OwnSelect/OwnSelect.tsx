import React from 'react';

type SelectPropsType = {
    title: string
    onChange: (value: any) => void
    value: any
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{props.title}</div>
            {props.items.map( (i, index) => <div key={index}>{i.title}</div> )}
        </div>
    );
};