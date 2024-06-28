const arr = [1, 2, 3, 4];
const userName = "Vijay   ";

String.prototype.trueLength = function () {
    let trueLength = 0;

    for (let index = 0; index < this.length; index++) {
        if (this[index] != " ") {
            trueLength++;
        }

    }
    return trueLength;
}

const hello = "MyHello is      msnmd  sjd namen";

console.log(`original length is ${hello.length} and true length is ${hello.trueLength()}`);




