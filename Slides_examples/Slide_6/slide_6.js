const array = [1, 2, 3, 4, 5]

// For iteration
for (let i = 0; i < array.length; i++) {
	console.log(array[i])
}

// For each iteration does not return a new array, it just iterates over the array
const newArrayForEach = array.forEach((element) => {
	console.log(element)
	return element * 2
})

console.log(array,newArrayForEach)

// Map iteration returns a new array
const newArray = array.map((element) => {
	return element * 2
})

console.log(array,newArray)