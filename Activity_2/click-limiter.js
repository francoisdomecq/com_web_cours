const MAX_CLICK_COUNT = 5
const CHANGE_COLOUR_COUNT = 3
let count = 0

const buttonClick = document.getElementById('button-click') // On récupère notre bouton défini dans le HTML grâce à son id
buttonClick.innerText = count.toString() // On change le texte du bouton pour qu'il affiche 0 dès le chargement de la page

const handleClickButton=()=>{
	count++
	buttonClick.innerText = count.toString() // A chaque incrémentation du compteur 'count', on actualise le text de notre boutton
	if(count === MAX_CLICK_COUNT){
		buttonClick.remove() // Si le compteur est égal à 5, on supprime le bouton (il disparaît du navigateur)
	}
	if(count === CHANGE_COLOUR_COUNT){
		buttonClick.style.backgroundColor = 'red' // Si le compteur est égal à 3, on modifie la couleur du bouton
	}
}

// On associe à notre bouton une fonction "handleClickButton" qui est appelée chaque fois que l'utilisateur clique sur le bouton
buttonClick.addEventListener('click', handleClickButton)