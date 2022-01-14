import {fakeFetch} from "./helpers.js";

const init = () => {
    fakeFetch()
    .then(() => console.log("Fake fetch completed"));
}

// Sample usage (do not modify)
init();