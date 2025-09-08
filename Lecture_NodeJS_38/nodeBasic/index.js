// let arr = process.argv;

// console.log(arr);




// let arr = process.argv.slice(2);
// console.log(arr);

// for (let i of arr) {
//     console.log(i);
// }
 

// task 1: k-x-x-x--x-x-x-x-x--x-x--x-x-x-x
// let n = process.argv.slice(2) // fixed hai ? no
// for (let i = 0; i < n.length; i++) {
//     console.log(n[i]);
// }

let n = parseInt(process.argv.pop())// fixed hai ? no
for (let i = 1; i <= n; i++) {
    console.log(i);
}

