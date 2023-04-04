const MAX_NUMBER = 10
const MIN_NUMBER = -10
const STEP_AMOUNT = 1

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    console.log('Subtract clicked')
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue;
    
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    } 

    if (add.disabled === true) {
        add.disabled = false 
    }
}
 
const addHandler = () => {
    console.log('Add clicked')
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } 
    
    if (subtract.disabled === true) {
        subtract.disabled = false
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)