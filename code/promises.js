

//Promise is an object representing the eventual completion or failure of the asyncronous operation.


//Method-1:

// const promiseOne = new Promise(function (resolve, reject) {
//     //do an asyn task
//     //DB calls
//     setTimeout(function () {
//         console.log("task is complete");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function () {
//     console.log("promise consumed");
// })


// //Method 2
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("task2");
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log("async is complete");
// })

//we can put Data in resolve

// const promiseThree = new Promise(function (resolve, reject) {
//     //do an asyn task
//     //DB calls
//     setTimeout(function () {
//         console.log("task is complete");
//         resolve({
//             user: "Vj",
//             email: "hello@gmail.com"
//         });
//     }, 1000)
// });

// promiseThree.then(function (user) {
//     console.log("promise consumed");
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: "Vijay", password: "123" })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username
//     }).then((username) => {
//         console.log(username);
//     }).catch(function (error) {
//         //catch the error
//         console.log(error);
//     }).finally(() => console.log("The promise is either resolved or rejected"))


// async function getUser() {

//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         //json mei convert karenge
//         const data = await response.json();

//         console.log(data);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getUser();


const a = new Promise(async function (resolve, reject) {

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json();

        console.log(json[0].name);
        console.log(json[0].address.street);


    }
    catch (error) {
        console.log("the error is error:", error)

    }

});

