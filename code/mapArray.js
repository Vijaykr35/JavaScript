//Map in js traverse all the values of the array 


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.map((num) => { return num * 2 });//if scope open then return is important

// console.log(newNum);

//chaining 
const nums = myNum.map((num) => num * 10).map((num) => num * 2).filter((num) => num > 150);
console.log(nums);