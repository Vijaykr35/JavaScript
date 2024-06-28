const myNum = [1, 2, 3, 4, 5];

const myTotal = myNum.reduce((acc, curval) => {
    console.log(`acc: ${acc}  and curval : ${curval}`);

    return acc + curval

}, 0);
console.log(myTotal);