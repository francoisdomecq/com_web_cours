let title=''
let url=''
let author=''

const titleInput = document.getElementById('title-input')
const urlInput = document.getElementById('url-input')
const authorInput = document.getElementById('author-input')
const submitButton = document.getElementById('submit-button')

const handleChangeTitle = (event)=>{
	title = event.target.value
	event.target.classList.remove('pub-link-input--error')
}

const handleChangeUrl = (event)=>{
	url = event.target.value
	event.target.classList.remove('pub-link-input--error')
}

const handleChangeAuthor = (event)=>{
	author = event.target.value
	event.target.classList.remove('pub-link-input--error')
}

const createLinkTitle = (title)=>{
	const linkTitleDiv = document.createElement('div')
	linkTitleDiv.classList.add('pub-link-grid__link-title')
	linkTitleDiv.textContent = title
	return linkTitleDiv
}

const createLinkUrl = (url)=>{
	const linkUrlDiv = document.createElement('a')
	linkUrlDiv.classList.add('pub-link-grid__link-url')
	if(!url.includes('http://')){
		url = `https://${url}`
	}
	linkUrlDiv.textContent = url
	linkUrlDiv.href = url
	linkUrlDiv.target = '_blank'

	return linkUrlDiv
}
const createLinkAuthor = (author)=>{
	const linkAuthorDiv = document.createElement('div')
	linkAuthorDiv.classList.add('pub-link-grid__link-author')
	linkAuthorDiv.textContent = `Submitted by: ${author}`
	return linkAuthorDiv
}

const createLink = (title,url,author)=>{
	const linkLi = document.createElement('li')
	linkLi.classList.add('pub-link-grid__link')

	const linkTitle = createLinkTitle(title)
	const linkUrl = createLinkUrl(url)
	const linkAuthor = createLinkAuthor(author)

	linkLi.appendChild(linkTitle)
	linkLi.appendChild(linkUrl)
	linkLi.appendChild(linkAuthor)

	return linkLi
}

const createErrorMessage =()=>{
	const errorMessage = document.createElement('div')
	errorMessage.id = 'error-message'
	errorMessage.classList.add('pub-link-grid__error-message')
	errorMessage.textContent = 'Please fill all the fields'
	return errorMessage
}

const handleSubmit = ()=>{
	event.preventDefault()

	const titleDiv = document.getElementById('title-input-div')
	const urlDiv = document.getElementById('url-input-div')
	const authorDiv = document.getElementById('author-input-div')

	if(!title){
		if(!document.getElementById('error-message')){
			titleDiv.appendChild(createErrorMessage())
		}
	} else if(!url){
		if(!document.getElementById('error-message')){
			urlDiv.appendChild(createErrorMessage())
		}
	} else if(!author){
		if(!document.getElementById('error-message')){
			authorDiv.appendChild(createErrorMessage())
		}
	} else {
		const linkGrid = document.getElementById('pub-link-grid')

		const linkToAdd = createLink(title,url,author)

		title= ''
		url= ''
		author = ''

		linkGrid.appendChild(linkToAdd)
	}
}

titleInput.addEventListener('input',handleChangeTitle)
urlInput.addEventListener('input',handleChangeUrl)
authorInput.addEventListener('input',handleChangeAuthor)
submitButton.addEventListener('click',handleSubmit)
