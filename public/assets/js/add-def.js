async function addDefPage(event) {
    event.preventDefault();
    document.location.replace('/new');
}

document.querySelector('#addDefBtn').addEventListener('click', addDefPage);