import { useTransition, useActionState } from 'react';

const updateName = (name) => new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function FormAction() {
    const [pending, startTransition] = useTransition();
    const submitAction = (formData) => {
        startTransition(async () => {
            const name = await updateName(formData.get('name'));
            console.log(name);
        });
    }
    
    const formHandler = async (previousState, formData) => {
        const name = await updateName(formData.get('name'));
        previousState.name = name;
        
        return previousState;
    }
    
    const [state, formAction, isPending] = useActionState(formHandler, { name: ''});
    console.log(state);
    
    return (
        <form>
            <input type="text" name="name" autoComplete={'true'} />
            <button formAction={formAction} disabled={isPending ? true : false}>Submit</button>
        </form>
    );
}

export default FormAction;