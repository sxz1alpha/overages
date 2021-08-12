async function logout() {
    const response = await fetch('/api/user/logout', {
        method: 'post',
        header: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logout);