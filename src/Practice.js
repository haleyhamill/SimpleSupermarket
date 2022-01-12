const runCode = () => {
    console.log("Step 1");
    try {
        getData();
    } catch (error) {
        console.error(error);
    }
    console.log("Step 2");
}