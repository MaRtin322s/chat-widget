import { useFormStatus } from 'react-dom';

const updateName = (name) => new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function SubmitButton() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>Submit</button>
}

function FormAction() {
    const submitAction = async (formData) => {
        await updateName(formData.get('name'));
        console.log(formData.get('name'));
    }

    return (
        <form action={submitAction}>
            <input type="text" name="name" autoComplete={'true'} />
            <SubmitButton />
        </form>
    );
}

export default FormAction;