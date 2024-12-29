// 'use strict';
// function test(){
//     console.log(test.xyz);
// }

const { log } = require("node:console");

// test();
// test.xyz = 200;
// test.xyz = 400;
// test();

// console.log(typeof typeof true);

// const arr = [20,21, 45, 78, 200, 41, 56];
// arr[100]=212

// console.log(arr);

// const arr2 = [... 'abcdefghijklmnopqrstuvw', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
// console.log(arr2);


// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));

// console.log(isNaN("NaN"));

// console.log([21,41,78,9].map(elm=>{
//     if(elm>0) return;
//     return elm*2;
// }));



// {
//     function abc() {
//         console.log("hii")
//     }
// }

// abc();



// function  abc(a,b) {
//     // 'use strict';
//     a=100;
//     b=200;
//     return arguments[0]+ arguments[1]
//     return (a+b); 
// }

// console.log(abc(300,400));



// const numbers = [5, 12, 8, 130, 44];

// const result = numbers.find(num => num > 10);
// console.log(result); // Output: 12 (first number greater than 10)

// const result2 = numbers.filter(num => num > 10);
// console.log(result2);

// const result3 = numbers.filter((num, index) => (index > 2 && num > 10));
// console.log(result3);

// const result4 = numbers.map(num => (num < 10? num : num*2));
// console.log(result4);


// const transformed = numbers.map(num => (num > 10 ? num * 2 : num));
// console.log(transformed); // Output: [5, 10, 30, 40]



// const str = 'PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run'

// const countobj = {};
// for(let i = 0; i < str.length; i++){
//     if(countobj[str[i]]){
//         countobj[str[i]]++;
//     }else{
//         countobj[str[i]] = 1;
//     }
// }

// for (let x of str) {
//     if (countobj[x]) {
//         countobj[x]++;
//     } else {
//         countobj[x] = 1;
//     }
// }

// console.log(countobj);



// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
// let obj = arr.reduce((acc, val, index) => {
//     acc[index+1] = val;
//     return acc;
// }, {});
// console.log(obj);

// let obj1 = arr.reduce((acc, val, index) => ({    
//     ...acc, [index+1] : val
// }), {});
// console.log(obj1);


for (i='A'.charCodeAt(0); i<='Z'.charCodeAt(0); i++){
    console.log(String.fromCharCode(i));    
}