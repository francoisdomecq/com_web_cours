const API_URI = 'https://api.cogform.fr/users'
const API_KEY = 'aaa'

let currentUserId

const userList = document.getElementById('users')

const sendUser = (firstName, lastName, password) => {
	const newUser = JSON.stringify({
		'prenom': firstName,
		'nom': lastName,
		'password': password
	})

	var xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function() {
		getUsers()
	})
	xhr.open('PUT', `${API_URI}/${currentUserId}`)
	xhr.setRequestHeader('X-API-Key', '')
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send(newUser)
}


const getUsers = () => {
	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function() {
		if(this.readyState === 4) {
			let userList = JSON.parse(this.responseText)
			displayUsers(userList)
		}
	})

	xhr.open('GET', API_URI)
	xhr.setRequestHeader('X-API-Key', API_KEY)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
}

const deleteUser = () => {
	if(currentUserId == null) return

	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function() {
		if(this.readyState === 4) {
			getUsers()
		}
	})

	xhr.open('DELETE', `${API_URI}/${currentUserId}`)
	xhr.setRequestHeader('X-API-Key', API_KEY)
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send()
}


const popup = document.getElementById('popup-bg')
const cancelButton = document.getElementById('cancel-button')
cancelButton.addEventListener('click', () => {
	popup.style.display = 'none'
	currentUserId = null
})

const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', () => {
	deleteUser()
	popup.style.display = 'none'
	currentUserId = null
})

const displayUsers = (users) => {
	userList.innerHTML = ''

	users.forEach(user => {
		const listItem = document.createElement('div')
		listItem.classList.add('list-item')

		const userItem = document.createElement('li')
		userItem.innerText = `${user.prenom} ${user.nom}`
		listItem.appendChild(userItem)

		const trash = document.createElement('li')
		trash.innerText = 'Supprimer'
		trash.setAttribute('userId', user.id)
		trash.setAttribute('username', user.prenom + ' ' + user.nom)
		trash.classList.add('trash')
		listItem.appendChild(trash)

		trash.addEventListener('click', () => {
			popup.style.display = 'flex'
			currentUserId = trash.getAttribute('userId')
			document.getElementById('current-user').innerText = trash.getAttribute('username')
		})

		userList.appendChild(listItem)
	})
}

const submitForm = document.getElementById('submit-user-form')
submitForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const firstName= event.target[0].value
	const lastName = event.target[1].value
	const password = event.target[2].value
	sendUser(firstName,lastName,password)
})


