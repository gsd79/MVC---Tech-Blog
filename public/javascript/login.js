async function newLogIn() {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    const response = await fetch(`/api/users/login`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/')
    } else {
        window.alert('You are NOT logged in. Wrong passy bestie')
        // console.log('You are NOT logged in')
    }
}

document
    .querySelector(".login-form").addEventListener("submit", newLogIn);
