//IIFE : Immediately invoked function expressions

//use to maintain  a clean global scope.Functions that immediately executes
//syntax: ()()


(function chai() {
    //named IIFE
    console.log(`db connected`);

})();//semicolon is important to close the contex the function 

((name) => {
    //unnamed IIFE
    console.log(`db connected to ${name}`)

})('SQL');//passing the parameter in IIFE
