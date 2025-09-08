let pi = 3.145;
let magicNum = 68;

console.log("I am learning node js");

function sqr(num) {
    return num ** 2;
}

let obj = {
    first: 'Uday', 
    last: 'Kushwah',
    age: 27,
    getName: function () {
        return this.first+" "+this.last;
        
    }
}

console.log(pi);
console.log(magicNum);

console.log(sqr(4));

console.log(obj.getName());



