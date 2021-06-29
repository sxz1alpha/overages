const apiPull = (path) => {
    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data));
};