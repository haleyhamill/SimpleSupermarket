// TODO: implement failAfter(milliseconds)
const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You asked me to fail after ${milliseconds}ms and I did!`)
        }, milliseconds);
    })
}

// Sample usage - do not modify
failAfter(1500).catch(error => {
    console.error(error); // "You asked me to fail after 1500ms and I did!"
});
