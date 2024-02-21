const  API_KEY = '9W2lJN38SCCp-C2Lr_CI'
const API_URI = 'https://api1.cogform.fr/users'

const userList = document.getElementById('users')

const displayUsers = () => {
	userList.innerHTML = ''

	const xhr = new XMLHttpRequest()

	xhr.addEventListener('readystatechange', ()=> {
		if(this.readyState === 4) {
			let fetchedUsers = JSON.parse(this.responseText)

			fetchedUsers.forEach(user => {
				let listItem = document.createElement('li')
				listItem.innerText = `${user.prenom} ${user.nom}`

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