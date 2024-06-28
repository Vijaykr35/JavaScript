let myDate = new Date();


console.log(myDate); //normally prints the date

console.log(myDate.getDay());//get the day of the week using local time 
console.log(myDate.getFullYear());//gives us the year acc to local time 

console.log(myDate.getHours()); //tells us the current hour  
console.log(myDate.toLocaleString('en-US'));//Converts a date and time to a string by using the current or specified locale. we can pass the parameter for the required country ex-for india  we can use ${en-IN}

console.log(myDate.toLocaleString('en-US', {
    weekday: "long"

}))