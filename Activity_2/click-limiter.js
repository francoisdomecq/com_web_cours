const MAX_CLICK_COUNT = 5;
const CHANGE_COLOUR_COUNT = 3;
let count = 0;

const buttonClick = document.getElementById('button-click');
buttonClick.innerText = count.toString()

const handleClickButton=()=>{
  count++
  buttonClick.innerText = count.toString()
  if(count === MAX_CLICK_COUNT){
    buttonClick.remove()
  }
  if(count === CHANGE_COLOUR_COUNT){
    buttonClick.style.backgroundColor = 'red'
  }
}

buttonClick.addEventListener('click', handleClickButton)