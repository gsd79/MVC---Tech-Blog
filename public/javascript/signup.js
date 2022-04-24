

async function newSignUp() {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();

    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/login')
    } else {
        console.log('You are NOT signed up')
    }
}

document.querySelector(".signup-form").addEventListener("submit", newSignUp);

