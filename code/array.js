const myArr = [0, 1, 2, 3, 4, 5];//can be re-size-able 

console.log(myArr.length);

//array method 
//1. push
myArr.push(839);
console.log(`arr size after push is: ${myArr.length}`);

console.log(myArr);

//2. pop- removes the last element from array
//3. unshift insert an ele in the begining of the array
//4. inlude -return T/F if the ele exist in the array
//5. join -it converts array into string

//6. slice -function slice the array
//7. splice -it returns same output as slice but modifies the array

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator


// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Vijay"))
console.log(Array.from("Vijay"))
console.log(Array.from({ name: "Vijay" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));