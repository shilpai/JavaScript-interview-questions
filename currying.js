
// currying with closures

// let multiply = function(x){
//     return function (y){
//         console.log(x * y);
//     }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);

// let multiplyByThree = multiply(3);
// multiplyByThree(10);


// curryning with bind method

let multiply = function(x,y){
console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 2);
multiplyByThree(7);