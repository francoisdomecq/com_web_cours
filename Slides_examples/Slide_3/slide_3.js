const varTest= ()=> {
	var x = 1
	if (x===1) {
		var x = 2 // c'est la même variable !
		console.log(x) // 2
	}
	console.log(x) // 2
}

const letTest=()=> {
	let x = 1
	if (x===1) {
		let x = 2 // c'est une variable différente
		console.log(x) // 2
	}
	console.log(x) // 1
}

const constTest=()=>{
	const x = 1
	if (x===1) {
		x = 2 // error
	}
	console.log(x) // 1
}

//letTest()
//varTest()
//constTest()