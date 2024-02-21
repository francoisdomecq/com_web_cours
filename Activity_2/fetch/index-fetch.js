const  API_URI = 'https://api1.cogform.fr/users'
const  API_KEY = '9W2lJN38SCCp-C2Lr_CI'

const requestHeaders = new Headers()
requestHeaders.append('X-API-Key', API_KEY)
requestHeaders.append('Content-Type', 'application/json')

const getUsers = () => {
	const requestOptions = {
		method: 'GET',
		headers: requestHeaders
	}

	fetch(API_URI, requestOptions)
		.then((response) => response.json())
		.then((result) => displayUsers(result))
		.catch((error) => console.error(error))
}

const sendUser = (firstName, lastName, password) => {
	const newUser = JSON.stringify({
		'prenom': firstName,
		'nom': lastName,
		'password': password
	})

	const requestOptions = {
		method: 'POST',
		headers: requestHeaders,
		body: newUser
	}

	fetch(API_URI, requestOptions)
		.then((response) => response.json())
		.then(() => getUsers())
		.catch((error) => console.error(error))
}

const userList = document.getElementById('users')

const displayUsers = (users) => {
	userList.innerHTML = ''

	users.forEach(user => {
		const userListItem = document.createElement('li')
		userListItem.innerText = `${user.prenom} ${user.nom}`

		userList.appendChild(userListItem)
	})
}


const formElement = document.getElementById('submit-user-form')
formElement.addEventListener('submit', (event) => {
	event.preventDefault()
	const firstName = event.target[0].value
	const lastName = event.target[1].value
	const password = event.target[2].value
	sendUser(firstName, lastName, password)
})

getUsers()