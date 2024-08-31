import { useTransition } from "react";

const updateName = (name) => new Promise(resolve => setTimeout(() => resolve(name), 2000));

function Transition() {
    const [isPending, startTransition] = useTransition();

    const formAction = (formData) => {
        startTransition(async () => {
            const name = formData.get('name');
            await updateName(name);
            console.log(name);
        })
    }

    return (
        <>
            <h1>useTransition hook</h1>
            <form action={formAction}>
                <input type="text" name="name" />
                <button disabled={isPending}>Submit</button>
            </form>
        </>
    );
}

export default Transition;