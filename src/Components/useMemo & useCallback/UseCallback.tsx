import React, {useCallback, useMemo, useState} from 'react';

export const UseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    /*const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])*/

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Vue']
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Vue']
        setBooks(newUsers)
    }, [books])

    return (
        <div>
            <button onClick={ () => setCounter(counter + 1) }>+</button>
            <Counter count={counter}/>
            <Book addBook={memoizedAddBook}/>
        </div>
    );
};

const Count = (props: any) => {
    console.log('counter')
    return (
        <div>{props.count}</div>
    );
};

type BooksSecretType = {
    // books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {/*{props.books.map((book, i) => <div>{book}</div>)}*/}
        </div>
    );
};

const Book = React.memo(BooksSecret)
const Counter = React.memo(Count)