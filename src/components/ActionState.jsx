import { useActionState } from "react";

const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

function ActionState() {
    const formHandler = async (previousState, formData) => {
        const name = formData.get('name');
        await updateName(name);
        return { name };
    }

    const [state, formAction] = useActionState(formHandler, null);

    return (
        <>
            <h1>useActionState hook</h1>
            <form action={formAction}>
                <input type="text" name="name" />
                <button>Submit</button>
            </form>
            <p>{state?.name}</p>
        </>
    );
}

export default ActionState;