import { useFormStatus } from 'react-dom';


const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

function SubmitButton() {
    const { pending } = useFormStatus();
    return <button disabled={pending}>Submit</button>
}

function FormStatus() {
    const formAction = async (formData) => {
        const name = formData.get('name');
        await updateName(name);
        console.log(name);

    }

    return (
        <>
            <h1>useFormStatus hook</h1>
            <form action={formAction}>
                <input type="text" name="name" />
                <SubmitButton />
            </form>
        </>
    );
}

export default FormStatus;