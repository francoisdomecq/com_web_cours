let currentUserId=''

const API_URI = 'https://api.cogform.fr/users'
const API_KEY = 'aaa'

const requestHeaders = new Headers()
requestHeaders.append('X-API-Key', API_KEY)
requestHeaders.append('Content-Type', 'application/json')

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
		.catch((error) => console.error('error',error))
}

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


const deleteUser = () => {
	if(currentUserId == null) return

	const requestOptions  = {
		method: 'DELETE',
		headers: requestHeaders
	}

	fetch(`${API_URI}/${currentUserId}`,requestOptions)
		.then((response) => response.json())
		.then(()=>getUsers())
		.catch((error)=>console.error(error))
}

const selectUserToDelete = (event)=>{
	currentUserId = event.target.getAttribute('userId')
	popup.style.display = 'flex'
}

const createUserElement = (listItem, user)=>{
	listItem.classList.add('list-item')
	const userItem = document.createElement('li')
	userItem.innerText = `${user.prenom} ${user.nom}`
	listItem.appendChild(userItem)
}

const createDeleteUserElement = (listItem,user)=>{
	const deleteUserButton = document.createElement('p')
	deleteUserButton.innerText = 'Supprimer'
	deleteUserButton.setAttribute('userId', user.id)
	deleteUserButton.setAttribute('username', user.prenom + ' ' + user.nom)
	deleteUserButton.classList.add('trash')
	listItem.appendChild(deleteUserButton)

	deleteUserButton.addEventListener('click', selectUserToDelete)
}

const popup = document.getElementById('popup-bg')
const userList = document.getElementById('users')

const displayUsers = (users) => {
	userList.innerHTML = ''

	users.forEach(user => {
		const listItem = document.createElement('div')
		createUserElement(listItem,user)
		createDeleteUserElement(listItem,user)



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

getUsers()