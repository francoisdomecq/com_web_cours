const MAX_ATTEMPT_NUMBER = 6
const MIN_NUMBER = 1
const MAX_NUMBER = 100

const numberToGuess = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER
let hasUserGuessedNumber = false
let attemptNumber = 0

while (!hasUserGuessedNumber && attemptNumber < MAX_ATTEMPT_NUMBER) {
	const userNumber = prompt('Guess the number')

	const parsedUserNumber = parseInt(userNumber)
	attemptNumber++
	if(parsedUserNumber === numberToGuess) {
		hasUserGuessedNumber = true
		alert('You found the number')
	} else if(userNumber < numberToGuess) {
		alert(`The number to guess is higher, you have ${MAX_ATTEMPT_NUMBER - attemptNumber} attempts left`)
	} else {
		alert(`The number to guess is lower, you have ${MAX_ATTEMPT_NUMBER - attemptNumber} attempts left`)
	}
}