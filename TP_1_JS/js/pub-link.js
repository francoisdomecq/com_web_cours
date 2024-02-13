const handleInputChange = ()=>{
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
	const link = document.createElement('div')

	linkTitle = createLinkTitle(title)
	linkUrl = createLinkUrl(url)
	linkAuthor = createLinkAuthor(author)

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

	const titleInput = document.getElementById('title-input')
	const urlInput = document.getElementById('url-input')
	const authorInput = document.getElementById('author-input')

	const titleValue = titleInput.value
	const urlValue = urlInput.value
	const authorValue = authorInput.value

	if(!titleValue){
		if(!document.getElementById('error-message')){
			titleDiv.appendChild(createErrorMessage())
		}
	} else if(!urlValue){
		if(!document.getElementById('error-message')){
			urlDiv.appendChild(createErrorMessage())
		}
	} else if(!authorValue){
		if(!document.getElementById('error-message')){
			authorDiv.appendChild(createErrorMessage())
		}
	} else {
		const linkGrid = document.getElementById('pub-link-grid')

		const linkToAdd = createLink(titleValue,urlValue,authorValue)

		titleInput.value = ''
		urlInput.value = ''
		authorInput.value = ''



		linkGrid.appendChild(linkToAdd)
	}
}

