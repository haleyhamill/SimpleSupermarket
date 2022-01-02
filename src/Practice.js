import { createStore } from "redux";

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
    console.log("Current state", state);
    console.log("Received action", action);

    if (action.type === "counter/increment") {
        return {
            value: state.value + 1 // important: do NOT mutate the state.
        };
    }

    return state; // return the state as is (in all other cases)
};

const store = createStore(counterReducer);


/*********************************************
 * The code below has NOT been explained yet *
 *         feel free to take a peek          *
 *    but don't worry too much about it!     *
 *********************************************/
const counterValue = document.querySelector("#counter-value");
const addButton = document.querySelector("#add-button");

store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
    counterValue.textContent = newState.value;
});

addButton.addEventListener("click", () => {
    store.dispatch({ type: "counter/increment" });
});