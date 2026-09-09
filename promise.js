function getData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = true;

            if (success) {
                resolve("Data received!");
            } else {
                reject("Failed to get data");
            }

        }, 2000);

    });

}

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Request completed");
    });
