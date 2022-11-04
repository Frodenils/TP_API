function handleClick(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");

    axios.get(url).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}

function handleClickPut(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");
    let name = document.getElementById("name").value;
    console.log(name)
    let body = { "name": name };
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.put(url, body, config).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}

/* Unnecessarily complex
function getData() {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/django-cest-nul").then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
    });
}

function handleClick() {
    getData().then((data) => {
        printData(data);
    }).catch((err) => {
        handleError(err);
    });
}

function printData(data) {
    try {
        let el = document.getElementById("api-res-container");
        el.innerHTML = JSON.stringify(data);
    } catch (err) {
        handleError("The data is unreadable");
    }
}

function handleError(err) {
    console.error(err);
    printData(err.message);
}
*/