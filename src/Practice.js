startLoader();
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        stopLoader();
    });