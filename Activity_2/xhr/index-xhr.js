const API_URI = 'https://api.cogform.fr/users'
const API_KEY = 'aaa'

const userList = document.getElementById('users')

const sendUser = (firstName, lastName, password, pseudo) => {
	const newUser = JSON.stringify({
		'prenom': firstName,
		'nom': lastName,
		'password': password,
		'pseudo':pseudo
	})

	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function() {
		if(this.readyState === 4){
			getUsers()
		}
	})
	xhr.open('POST', API_URI)
	xhr.setRequestHeader('X-API-Key', API_KEY)
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send(newUser)
}

const getUsers = () => {
	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function() {
		if(this.readyState === 4) {
			const users = JSON.parse(this.responseText)
			displayUsers(users)
		}
	})

	xhr.open('GET', API_URI)
	xhr.setRequestHeader('X-API-Key',API_KEY)
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send()
}

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
	console.log(event)
	event.preventDefault()
	const firstName = event.target[0].value
	const lastName = event.target[1].value
	const password = event.target[2].value
	const pseudo = event.target[3].value
	sendUser(firstName, lastName, password, pseudo)
})

getUsers()