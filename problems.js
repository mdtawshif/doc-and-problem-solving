// Find Factorial of a number using for loop

// const num = -3;
// var factorial = 1;

// if(num<0){
//     console.log("Error!");
// }
// else{
//     for(let i=1; i<=num; i++){
//         factorial = factorial * i ;
//     }
//     console.log(factorial);
// }


// Calculate Factorial in a Recursive function

// function factorial(num) {
//     let fact = 1;
//     if (num < 0) {
//        return "error@!";
//     }
//     else {
//         for (let i = 1; i <= num; i++) {
//             fact = fact * i;
//         }
//         return fact;
//     }
// }
// const answer = factorial(6);
// console.log(answer);

//Create a Fibonacci Series using a for loop:

// var terms = 10, p1 = 0, p2 = 1, nextNum = 0;
// for (let i = 0; i < terms; i++) {
//     if (i < 2) {
//         nextNum = i;
//     } else {
//         nextNum = p1 + p2;
//         p1 = p2;
//         p2 = nextNum;
//     }
//     console.log(nextNum,", ");
// }

// Check whether a number is a Prime Number or not

// const n = 12;

// for(let i = 2; i<n/2 ; i++){
//     if(n % i == 0 ){
//         console.log('Not prime');
//         break;
//     }
//     else{
//         console.log('prime');
//         break;

//     }
// }

// Find the largest element of an array


// const maxNum = (arr) => {
//     const findMax = Math.max(...arr);
//     return findMax;
// }

// const arr= [12,23,1,56,34,67,88,90,1234,1,2,34,55];
// const showMax = maxNum(arr);
// console.log(showMax);

// Sum of all numbers in an array

// const arraySum = (arr) => {
//     var sum =0;
//    for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//    }
//    return sum;
// }

// const arr= [12,23,1,56,34,67,88,90,1234,1,2,34,55];
// const showSum = arraySum(arr);
// console.log(showSum);

//Reverse a string

// const str = "Tawshif md Mostafa";
// const reversedStr = [...str].reverse().join("");
// console.log(reversedStr);