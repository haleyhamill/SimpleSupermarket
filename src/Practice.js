const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

wait(1000).then(() => {
    console.log("waited 1 second");
});