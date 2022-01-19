fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // handle network errors
        console.error(error);
    });