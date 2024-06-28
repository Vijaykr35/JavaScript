const tinder = new Object();//singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = '123acs';
tinderUser.name = 'VJ';
tinderUser.isLoggedIn = false;



// console.log(tinderUser);

//combining objects

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 4: 'a', 5: 'b' };
// const obj3 = { obj1, obj2 };
//wrong way gives:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '4': 'a', '5': 'b' } }

const obj3 = { ...obj1, ...obj2 };//spread opperator mostly used
// console.log(obj3); 

console.log(Object.keys(tinderUser));//returns an array of keys we can do same for values

console.log(Object.entries(tinderUser));// returns array of array : [ [ 'id', '123acs' ], [ 'name', 'VJ' ], [ 'isLoggedIn', false ] ] 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring 

const course = {
    courseName: "js in Hindi",
    price: '999',
    courseInst: "Hitesh"
}

// const {courseInst}=course;

const { courseInst: CI } = course;
console.log(CI);