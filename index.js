function receivesAFunction(callback) {
    callback()
}
// With arrow function 
// const receivesAFunction = callback => callback()






function returnsANamedFunction() {
    return function namedFunction() {

    }
}


function returnsAnAnonymousFunction() {
    return function () {

    }
}

