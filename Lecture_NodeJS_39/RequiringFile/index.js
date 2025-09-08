//file 1
let pi = Math.PI;
// console.log(pi);

// let ans = (num)=>(return num*num);
let ans1 = (num) => num * num;
let ans2 = (a, b) => a + b;

// console.log(ans1);
// console.log(ans2);

// export behaviour show karega because require dekh liya hai
// by default, exports an empty object {}

// explicit
// module.exports = {}; //by default empty object

// module.exports = pi;
module.exports = { pi, ans1, ans2 }; // why not this be a key-value pair ?
// what is module exports ?
// obj == key:value

// if key and value are same
/* module.exports = {
    pi, // pi: pi,
    ans1, // ans1: ans1,
    ans2, // ans2: ans2,
};  */

/* 
  module.exports = {
  pie: pi,
  square: ans1,
  sum: ans2,
}; */

// kya ham object ki jagah kuch bhej sakte hai ? --> YES
// module.exports = 'uday kushwah java dsa'
