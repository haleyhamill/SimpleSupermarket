const result = wait(1000);
console.log(result); // Promise {<pending>}
result.then(() => {
    console.log(result); // Promise {<fulfilled: undefined}
});
console.log(result); // Promise {<pending>}