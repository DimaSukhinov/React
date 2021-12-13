import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type SelectPropsType = {
    title: string
    onChange: (value: any) => void
    value?: any
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)

    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        /*setHoveredElValue(props.items[i + 1].value)*/
                        break
                    }
                }
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map((i, index) => <div
                        onMouseEnter={() => {
                            setHoveredElValue(i.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        key={index}
                        onClick={() => {
                            onItemClick(i.value)
                        }}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    );
};