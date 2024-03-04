const  API_KEY = 'aaa'
const API_URI = 'https://api.cogform.fr/users'

const requestHeaders = new Headers()
requestHeaders.append('X-API-Key', API_KEY)

const requestOptions = {
	method: 'GET',
	headers: requestHeaders
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

const fetchUsers = () => {
	fetch(API_URI, requestOptions)
		.then((response) => response.json())
		.then((result) => displayUsers(result))
		.catch((error) => console.error(error))
}

const fetchUsersButton = document.getElementById('btn-load-users')

fetchUsersButton.addEventListener('click', fetchUsers)