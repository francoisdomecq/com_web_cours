hoistingWorking()

function hoistingWorking(){
	console.log('This function can be called before it is defined')
}

hoistingNotWorking()

const hoistingNotWorking =()=>{
	console.log('This function cannot be called before it is defined')
}

hoistingNotWorkingBis()

const hoistingNotWorkingBis = function(){
	console.log('This function cannot be called before it is defined')
}