const elementToAdd = document.createElement('li')
elementToAdd.textContent = 'Replaced list element'

const listElement = document.getElementById('slide-examples-list')
const listElementChildren = listElement.children[0]

listElement.replaceChild(elementToAdd, listElementChildren)