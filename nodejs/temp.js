// 'use strict';
// function test(){
//     console.log(test.xyz);
// }

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


// for (i='A'.charCodeAt(0); i<='Z'.charCodeAt(0); i++){
//     console.log(String.fromCharCode(i), i);
// }


// Hexadecimal color representation
// const randomColor = ()=>{
//     return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
// }

// log(randomColor());


// remove the duplicate characters from a array
// const arr = [1,5,6,6,1,7,8,8,9,10,5,11]
// const characterList = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// const uniqueArray = (arr) =>{
//     return [...new Set(arr)];
// }

// console.log(uniqueArray(arr));
// console.log(uniqueArray(characterList));


// conditional function
// if (0.1 + 0.2 === 0.3) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// console.log(0.1 + 0.2 );


// Nested arrays
// const arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
// console.log(arr.flat(Infinity));

// Find empty object
// const findEmptyObject = (obj) => {return Object.keys(obj).length === 0;};
// console.log(findEmptyObject({}));
// console.log(findEmptyObject({a:1}));
// console.log(findEmptyObject({a:undefined}));
// console.log(findEmptyObject({a:null}));

// Alternative way to find empty object
// const findEmptyObject = (obj) => {return JSON.stringify(obj) === '{}';};
// console.log(findEmptyObject({}));
// console.log(findEmptyObject({a:1}));
// console.log(findEmptyObject({a:undefined}));
// console.log(findEmptyObject({a:null}));

// Find empty array
// const findEmptyArray = (arr) => {return arr.length === 0;};
// console.log(findEmptyArray([]));   
// console.log(findEmptyArray([1]));

// Array to objects
// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// const obj = arr.reduce((acc, val, index) => {
//     acc[index+1] = val;
//     return acc;
// }, {});
// const obj = Object.fromEntries(arr.map((val, index) => [index+1, val]));
// console.log(obj);

// Object to arrays
// const obj1 = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j'};
// const entries = Object.entries(obj1);
// const arr1 = Object.values(obj1);
// const keys = Object.keys(obj1);
// const gwpn = Object.getOwnPropertyNames(obj1)
// console.log(gwpn);
// console.log(entries);
// console.log(entries.flat(Infinity));
// console.log(arr1);
// console.log(keys);

// let obj = {
//     name: "Alice",
//     age: 25,
//     greet() {
//       console.log("Hello!");
//     }
//   };
  
//   // Accessing properties
//   console.log(obj.name);          // "Alice"
//   console.log(obj['age']);        // 25
  
//   // Adding properties
//   obj.job = "Developer";
//   console.log(obj);
  
//   // Iterating over properties
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
  
//   // Checking property existence
//   console.log(obj.hasOwnProperty("age")); // true


// Find the days difference between two dates
// const date1 = new Date('2021-01-01');
// const date2 = new Date('2021-12-31');
// // const diffTime = Math.abs(date2 - date1); // returns in milliseconds
// const daysDiff = (d1, d2) => {
//     return Math.ceil(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24));    
// }
// console.log(daysDiff(date1, date2)); 

// Age and date calculation from date of birth
// function calculateAgeWithDays(birthDate) {
//     const today = new Date();
//     const birth = new Date(birthDate);
  
//     // Age in years
//     let ageInYears = today.getFullYear() - birth.getFullYear();
  
//     // Adjust age if birthday hasn't occurred yet this year
//     const hasBirthdayPassed = today.getMonth() > birth.getMonth() ||
//       (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  
//     if (!hasBirthdayPassed) {
//       ageInYears--;
//     }
  
//     // Most recent birthday date
//     const lastBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
//     if (!hasBirthdayPassed) {
//       lastBirthday.setFullYear(today.getFullYear() - 1);
//     }
  
//     // Days since the last birthday
//     const diffTime = today - lastBirthday; // Milliseconds since last birthday
//     const daysSinceBirthday = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
  
//     return `${ageInYears} years ${daysSinceBirthday} days`;
//   }
  
//   const ageDetails = calculateAgeWithDays("2000-06-16");
//   console.log(`Age: ${ageDetails}`); 