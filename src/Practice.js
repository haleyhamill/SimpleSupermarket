import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // TODO: handle the "increment" action
      state.value += 1
    },
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
const { increment } = counterSlice.actions;

const counterValue = document.querySelector("#counter-value");
const addButton = document.querySelector("#add-button");

store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
    counterValue.textContent = newState.value;
});

addButton.addEventListener("click", () => {
    store.dispatch(increment());
});
