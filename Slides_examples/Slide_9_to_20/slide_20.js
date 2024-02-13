let inputValue =''
const handleChangeInputValue = (event)=>{
	inputValue = event.target.value
	console.log(inputValue)
}

const inputElement = document.getElementById('slide-examples-input')
inputElement.addEventListener('input', handleChangeInputValue)