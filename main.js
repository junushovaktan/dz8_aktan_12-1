const url = 'https://jsonplaceholder.typicode.com/users'
const name = document.getElementById('name');
const username = document.getElementById('username')
const email = document.getElementById('email')
const btn = document.getElementById('btn')



async function postResponse (){
    const data = {
        name: name.value,
        username: username.value,
        email: email.value
    }
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, post)
    const userData = await response.json()
    console.log(userData)
}

btn.addEventListener('click', postResponse)