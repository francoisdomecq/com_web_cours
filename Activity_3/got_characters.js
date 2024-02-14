const GOT_FAMILIES = [
	{
		name: 'Baratheon',
		members: ['Robert','Stannis','Renly']
	},
	{
		name: 'Lannister',
		members: ['Tyrion','Cersey','Jaime','Tyrion']
	},
	{
		name: 'Stark',
		members: ['Eddard','Catelyn','Robb','Sansa','Arya','Jon Snow']
	},
	{
		name: 'Targaryen',
		members: ['Aerys','Daenerys','Viserys']
	}
]

const handleFamilyClick= (event) => {
	const selectedFamily = GOT_FAMILIES.find(family=> family.name === event.target.value)
	const gotHouseCharacters = document.getElementById('got-house-characters')
	gotHouseCharacters.innerHTML = ''
	selectedFamily.members.forEach(member=>{
		const li = document.createElement('li')
		li.textContent = member
		gotHouseCharacters.appendChild(li)
	})
}

const gotFamilySelect = document.getElementById('got-house-select')
gotFamilySelect.addEventListener('change', handleFamilyClick)

GOT_FAMILIES.forEach(family=>{
	const option = document.createElement('option')
	option.value = family.name
	option.textContent = family.name
	gotFamilySelect.appendChild(option)
})

