function isFibonacci(number) {
    let a = 0
    let b = 1

    if (number === 0 || number === 1)
        return true

    nextNumber = a + b
    while (nextNumber < number) {
        nextNumber = a + b
        a = b
        b = nextNumber


    }

    return nextNumber === number
}


let setNumber = 21 //Set here a number

if (setNumber < 0) {
    console.log("You can't set negative numbers")
    return
}
if (isFibonacci(setNumber)) {
    console.log(`${setNumber} Is a Fibonnacci number !`)
} else {
    console.log(`${setNumber} Is not a Fibonnacci number !`)

}
