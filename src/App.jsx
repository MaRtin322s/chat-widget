import ActionState from "./components/ActionState";
import FormAction from "./components/FormAction";
import FormStatus from "./components/FormStatus";
import Optimistic from "./components/Optimistic";
import Transition from "./components/Transition";

function App() {
    return (
        <>
            <div>
                <FormAction />
                <FormStatus />
                <Transition />
                <ActionState />
                <Optimistic />
            </div>
        </>
    )
}

export default App;