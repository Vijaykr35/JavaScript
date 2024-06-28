// const coding = ["js", "python", "java", "C++"];

// coding.forEach((item) => {
//     console.log(item);

// });

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNums.filter((nums) => {
//     return nums > 4;

// });

// console.log(newNums);

const newNums = [];
console.log(`before ${newNums}`);


myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});
console.log(`After  ${newNums}`);



