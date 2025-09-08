


// approach 1:
// rejected due to modulus operation
/* function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
let n = 20;
fizzbuzz(n) */


// approach 2: little optimized
/* function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        if (i % 3 === 0) {
            str += 'Fizz';
        }
        if (i % 5 === 0) {
            str += 'Buzz';
        }
        if (str === '') {
            str += i;
        }
        console.log(str);
        
    }
}
let n = 20;
fizzbuzz(n); */


// approach 2 : most optimised

/* function fizzbuzz(n) {
    let count3 = 1;
    let count5 = 1
    let c3 = 3;
    let c5 = 5;

    for (let i = 1; i <= n; i++) {
        let str = '';
      
        if (count3 === c3) {
            str += "Fizz";
            c3 += 3;
        }
        if (count5 === c5) {
            str += "Buzz"
            c5 += 5;
        }
        // if (count3)
        if (str === '') {
            str += i;
        }
        count3 += 1;
        count5 += 1;
        console.log(str);
        
    }
}
let n = 20;
fizzbuzz(n); */


function fizzbuzz(n) {
  let count3 = 1;
  let count5 = 1;

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (count3 === 3) {
      str += "Fizz";
        count3 = 0;
    }
    if (count5 === 5) {
      str += "Buzz";
        count5 = 0;
    }
    // if (count3)
    if (str === "") {
      str += i;
    }
    count3 += 1;
    count5 += 1;
    console.log(str);
  }
}
let n = 20;
fizzbuzz(n);
