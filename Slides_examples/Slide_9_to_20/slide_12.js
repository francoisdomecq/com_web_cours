const linkElement = document.querySelector('a')
const linkElementHref = linkElement.getAttribute('href')

linkElement.href= 'http://github.com/'
linkElement.id = 'firstLink'
linkElement.target= '_blank'

console.log('linkElementHref', linkElementHref)
