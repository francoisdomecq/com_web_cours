localStorage.setItem('maclef', 'valeur')
localStorage.getItem('maclef')

let errorMessage = document.getElementById('errorMessage')
let form = document.getElementById('myform')
let secretform = document.getElementById('mysecretform')
let currentUserID
let currentUser


const updateDisplay = () => {
	if(localStorage.getItem('usertoken')) {
		secretform.style.display = 'block'
		form.style.display = 'none'
	} else {
		secretform.style.display = 'none'
		form.style.display = 'block'
	}
}

updateDisplay()


form.addEventListener('submit', (e) => {
	e.preventDefault()
	errorMessage.style.display = 'none'
	checkToken(e.target[0].value, e.target[1].value)
})

secretform.addEventListener('submit', (e) => {
	e.preventDefault()
	sendPassword(e.target[0].value)
})

const disconnect = () => {
	localStorage.clear()
	updateDisplay()
}

document.getElementById('btnDisconnect').addEventListener('click', (e) => {
	e.preventDefault()
	disconnect()
})

const sendPassword = (password) => {
	var data = JSON.stringify({
		'password': password
	})

	var xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function(e) {
		if(this.readyState === 4) {
			let response = JSON.parse(this.responseText)
			if(response.message == 'Password updated.') disconnect()
		}
	})

	xhr.open('POST', 'https://api.cogform.fr/password')
	xhr.setRequestHeader('X-API-Key', 'aaa')
	xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('usertoken'))
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send(data)
}


const checkToken = (pseudo, password) => {
	var data = JSON.stringify({
		'pseudo': pseudo,
		'password': password
	})

	var xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function(e) {
		if(this.readyState === 4) {
			let response = JSON.parse(this.responseText)
			console.log(response)
			if(response.result) {
				localStorage.setItem('usertoken', response.token)
				form.style.display = 'none'
				updateDisplay()
			} else {
				errorMessage.style.display = 'block'
			}
		}

	})

	xhr.open('POST', 'https://api.cogform.fr/login')
	xhr.setRequestHeader('X-API-Key', 'aaa')
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send(data)
}
