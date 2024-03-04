let currentUserId=''

const API_URI = 'https://api.cogform.fr/users'
const API_KEY = 'aaa'

const requestHeaders = new Headers()
requestHeaders.append('X-API-Key', API_KEY)
requestHeaders.append('Content-Type', 'application/json')

const sendUser = (firstName, lastName, password, pseudo) => {
	const newUser = JSON.stringify({
		'prenom': firstName,
		'nom': lastName,
		'password': password,
		'pseudo': pseudo
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

const updateUser = (firstName,lastName, pseudo)=>{
	const newUser = JSON.stringify({
		'prenom': firstName,
		'nom': lastName,
		'pseudo':pseudo
	})

	const requestOptions = {
		method: 'PUT',
		headers: requestHeaders,
		body: newUser
	}

	fetch(`${API_URI}/${currentUserId}`, requestOptions)
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

const selectUser = (event,actionType,user)=>{
	currentUserId = event.target.getAttribute('userId')
	if(actionType==='delete'){
		deletePopup.style.display = 'flex'
	} else if (actionType==='update'){
		updatePopup.style.display='flex'
		const updateFirstNameDiv = document.getElementById('update-first-name')
		const updateLastNameDiv = document.getElementById('update-last-name')
		const updatePseudoDiv = document.getElementById('update-pseudo')
		updateFirstNameDiv.value = user.prenom
		updateLastNameDiv.value = user.nom
		updatePseudoDiv.value = user.pseudo
	}
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

	deleteUserButton.addEventListener('click', (event)=>selectUser(event,'delete'))
}

const createModifyUserElement = (listItem,user)=>{
	const modifyUserButton = document.createElement('p')
	modifyUserButton.innerText = 'Modifier'
	modifyUserButton.setAttribute('userId', user.id)
	modifyUserButton.classList.add('update')
	listItem.appendChild(modifyUserButton)

	modifyUserButton.addEventListener('click', (event)=>selectUser(event,'update',user))
}

const deletePopup = document.getElementById('delete-popup-bg')
const updatePopup = document.getElementById('update-popup-bg')
const userList = document.getElementById('users')

const displayUsers = (users) => {
	userList.innerHTML = ''

	users.forEach(user => {
		const listItem = document.createElement('div')
		createUserElement(listItem,user)
		createModifyUserElement(listItem,user)
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
	deletePopup.style.display = 'none'
	currentUserId = null
})

const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', () => {
	deleteUser()
	deletePopup.style.display = 'none'
	currentUserId = null
})

const submitUpdateButton = document.getElementById('update-user-form')
submitUpdateButton.addEventListener('submit',(event)=>{
	event.preventDefault()
	const firstName= event.target[0].value
	const lastName = event.target[1].value
	const pseudo = event.target[2].value
	updateUser(firstName,lastName,pseudo)
	updatePopup.style.display = 'none'
	currentUserId = null
})

getUsers()
