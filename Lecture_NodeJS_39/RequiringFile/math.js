// file 2

// let math = require("./index"); //or require('index.js)
// console.log(math); // empty object

// console.log(math.pi);
// math.pi;
// console.log(math.ans1(4));
// console.log(math.ans2(2, 3));

// destructure the object

// let { pi, ans1, ans2 , extra} = require("./index.js");
// console.log(pi);
// console.log(ans1(4));
// console.log(ans2(3, 4));
// console.log(extra);


// ------------------------------------
// let { pie, square, sum } = require("./index.js");
// console.log(pie);
// console.log(square(8));
// console.log(sum(2, 3));

let { pie:hello, square, sum } = require("./index.js");
// console.log(pie);  // gives error
console.log(hello);

//-------------------------------------------
// let math = require("./index");
// console.log(math);
