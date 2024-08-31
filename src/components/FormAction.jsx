function FormAction() {
    const formAction = (formData) => {
        const name = formData.get('name');
        console.log(name);

    }

    return (
        <>
            <h1>Form Action</h1>
            <form action={formAction}>
                <input type="text" name="name" />
                <button>Submit</button>
            </form>
        </>
    );
}

export default FormAction;