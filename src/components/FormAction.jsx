import { useTransition } from 'react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

const updateName = (name) => new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function FormAction() {
    const [pending, startTransition] = useTransition();
    const submitAction = (formData) => {
        startTransition(async () => {
            const name = await updateName(formData.get('name'));
            console.log(name);
        });
    }

    return (
        <form action={submitAction}>
            <input type="text" name="name" autoComplete={'true'} />
            <button disabled={pending ? true : false}>Submit</button>
        </form>
    );
}

export default FormAction;