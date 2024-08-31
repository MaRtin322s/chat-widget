import { useState } from "react";
import uniqid from 'uniqid';
import { useTransition, useActionState, useOptimistic } from 'react';

function Optimistic() {
    const [todos, setTodos] = useState([
        { id: uniqid(), title: 'Clean' },
        { id: uniqid(), title: 'Study' }
    ]);

    const updateName = (name) => new Promise((resolve) => setTimeout(() => resolve(name), 2000));

    const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

    const formHandler = async (previousState, formData) => {

        setOptimisticTodos(state => [...state, { id: uniqid(), title: formData.get('name') + '...' }]);

        const name = await updateName(formData.get('name'));

        setTodos(state => [...state, {
            ...state,
            id: uniqid(), title: name
        }]);

        return previousState;
    }

    const [state, formAction, isPending] = useActionState(formHandler, { name: '' });

    return (
        <>
            <h1>useOptimistic hook</h1>
            <form action={formAction}>
                <input type="text" name="name" />
                <button disabled={isPending ? true : false}>Submit</button>
            </form>

            <ul>
                {optimisticTodos?.map(x => <li key={x.id}>{x.title}</li>)}
            </ul>
        </>
    );
}

export default Optimistic;