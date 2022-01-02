import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    // TODO decrement
    decrement: (state) => {
      state.value -= 1;
    },
    // TODO reset
    reset: (state) => {
      state.value = 0;
    }
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

/*********************************************
 * The code below has NOT been explained yet *
 *         feel free to take a peek          *
 *    but don't worry too much about it!     *
 *********************************************/
const { increment, decrement, reset } = counterSlice.actions;

const counterValue = document.querySelector("#counter-value");
const addButton = document.querySelector("#add-button");
const subButton = document.querySelector("#sub-button");
const resetButton = document.querySelector("#reset-button");

store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
    counterValue.textContent = newState.value;
});

addButton.addEventListener("click", () => {
    store.dispatch(increment());
});

subButton.addEventListener("click", () => {
    store.dispatch(decrement());
});

resetButton.addEventListener("click", () => {
    store.dispatch(reset());
});
