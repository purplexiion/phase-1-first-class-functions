function receivesAFunction(Spy) {
    Spy();
}


function returnsANamedFunction() {
    return function namedFunction() {
        console.log('this is a function');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`I am anonymous`);
    }
}