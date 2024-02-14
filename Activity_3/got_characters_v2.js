const selectElement = document.getElementById('got-house-select') // On sélectionne notre balise select définie dans le HTML

// On définit des tableaux contenant les membres de chacune des familles
const STARK_FAMILY = ['Eddard','Catelyn','Robb','Sansa','Arya','Jon Snow']
const LANNISTER_FAMILY = ['Tyrion','Cersey','Jaime','Tyrion']
const TARGARYEN_FAMILY = ['Aerys','Daenerys','Viserys']
const BARATHEON_FAMILY =  ['Robert','Stannis','Renly']

const handleSelectGotFamily = (event)=>{

	const selectedFamily = event.target.value // Permet de récupérer la valeur du option sélectionné par l'utilisateur

	const ulElement = document.getElementById('got-house-characters') // On récupère notre balise ul définie dans le HTML où on va ajouter nos membres d'une maison

	// Permet de réinitialiser le contenu de la liste. C'est pour éviter que si l'utilisateur clique sur Stark puis Baratheon, on affiche les membres de la famille Stark et Baratheon
	ulElement.innerHTML='' // Supprimer cette ligne et sélectionner plusieurs familles dans le navigateur pour voir ce que ça fait si on réinitialise pas le contenu de la liste

	// On regarde si l'utilisateur a sélectionné l'option qui a pour value Stark : <option value='Stark'>..</option>
	if(selectedFamily==='Stark'){
		// Le forEach permet de boucler sur le tableau créé plus haut : STARK_FAMILY
		STARK_FAMILY.forEach((memberOfFamily)=>{
			// A la 1ère itération memberOfFamily = 'Eddard' (1er élément du tableau STARK_FAMILY), 2ème itération : memberOfFamily = 'Catelyn' etc...
			const newLiElement = document.createElement('li') // On crée une balise li
			// Ci-dessous, on change le contenu de la balise li définie à l'instant en lui donnant comme valeur memberOfFamily (qui va être égal à 'Eddard' à la 1ère itération, 'Catelyn' à la 2ème etc..)
			newLiElement.innerHTML=memberOfFamily
			// On ajoute notre nouvelle balise li dont on a modifié le contenu à notre liste ul
			ulElement.appendChild(newLiElement)
		})
	} // Pour les autres else if, on fait pareil en changeant juste le tableau sur lequel on va itérer
	else if(selectedFamily==='Baratheon'){
		BARATHEON_FAMILY.forEach((memberOfFamily)=>{
			const newLiElement = document.createElement('li')
			newLiElement.innerHTML=memberOfFamily
			ulElement.appendChild(newLiElement)
		})
	}else if(selectedFamily==='Lannister'){
		LANNISTER_FAMILY.forEach((memberOfFamily)=>{
			const newLiElement = document.createElement('li')
			newLiElement.innerHTML=memberOfFamily
			ulElement.appendChild(newLiElement)
		})
	} else if (selectedFamily==='Targaryen'){
		TARGARYEN_FAMILY.forEach((memberOfFamily)=>{
			const newLiElement = document.createElement('li')
			newLiElement.innerHTML=memberOfFamily
			ulElement.appendChild(newLiElement)
		})
	}
}

// On associe à notre select une fonction "handleSelectGotFamily" qui est appelée chaque fois que l'utilisateur sélectionne une des options
selectElement.addEventListener('change', handleSelectGotFamily)