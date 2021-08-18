async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-sign-up').value.trim();
    const email = document.querySelector('#email-sign-up').value.trim();
    const phone = document.querySelector('#password-sign-up').value.trim();
    const password = document.querySelector('#phone-number-sign-up').value.trim();

    if( username && email && phone && password ) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                phone,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok) {
            document.location.replace('/hotlist');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#sign-up-form').addEventListener('submit', signUpHandler);