const  API_KEY = 'aaa'
const API_URI = 'https://api.cogform.fr/users'

const userList = document.getElementById('users')

const displayUsers = () => {
	userList.innerHTML = ''
	const xhr = new XMLHttpRequest()

	xhr.addEventListener('readystatechange', function() {
		if(this.readyState === 4) {
			const fetchedUsers = JSON.parse(this.responseText)

			fetchedUsers.forEach(user => {
				const listItem = document.createElement('li')
				listItem.innerText = `${user.nom} ${user.prenom}`
				userList.appendChild(listItem)
			})
		}
	})

	xhr.open('GET', API_URI)
	xhr.setRequestHeader('X-API-Key', API_KEY)
	xhr.send()
}

const fetchUsersButton = document.getElementById('btn-load-users')
fetchUsersButton.addEventListener('click', displayUsers)