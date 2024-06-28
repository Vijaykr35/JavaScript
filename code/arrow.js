const user = {
    username: "VIjay",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);//this operator
        // console.log(this);

    }
}

// function one() {
//     console.log(this);
// }

//this can only access properties like username etc  in objects Not in function



console.log(this);

const fun = () => {
    let username = "vJ"
    console.log("hello");
    console.log(this.username);
}



