const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
}