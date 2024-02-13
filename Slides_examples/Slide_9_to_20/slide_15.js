const elementToAdd = document.createElement('li')
elementToAdd.textContent = 'New list element'

const listElement = document.getElementById('slide-examples-list')
listElement.appendChild(elementToAdd)