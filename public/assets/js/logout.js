async function logout() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/login');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);