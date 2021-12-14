import React, {useState} from 'react';

export const ReactMemo = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['1', '2', '3'])

    const addUser = () => {
        const newUsers = [...users, '4']
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={ () => setCounter(counter + 1) }>+</button>
            <button onClick={addUser}>+</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </div>
    );
};

const CounterSecret = (props: any) => {
    console.log('counter')
    return (
        <div>{props.count}</div>
    );
};

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u, i) => <div>{u}</div>)}
        </div>
    );
};

const Users = React.memo(UsersSecret)
const Counter = React.memo(CounterSecret)