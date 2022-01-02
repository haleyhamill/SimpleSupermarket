import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // TODO
    incrementBy: (state, action) => {
      state.value += action.payload
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

const { incrementBy } = counterSlice.actions;

const counterValue = document.querySelector("#counter-value");

store.subscribe(() => {
    const newState = store.getState();
    console.log("New state", newState);
    counterValue.textContent = newState.value;
});

document.querySelector("#add-one").addEventListener("click", () => {
    store.dispatch(incrementBy(1));
});

document.querySelector("#add-five").addEventListener("click", () => {
    store.dispatch(incrementBy(5));
});

document.querySelector("#add-ten").addEventListener("click", () => {
    store.dispatch(incrementBy(10));
});
