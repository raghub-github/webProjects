// Luhn algorithm

// const validCardNumber = (str) => {
//     // Remove spaces from the string
//     str = str.replace(/\D/g, "");
//     // reverse the digits
//     let revNum = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revNum = revNum + str[i];
//     }
//     // Double evry second digit sum all the digits
//     let doubleAndSum = revNum.split("").map((digit, index) => {
//         if (index % 2 !== 0) { digit *= 2 }
//         // If the digit is greater than 9 then sustract 9 from the number
//         // 16 is reater than 9, so sustract 9 from it  ==> 16-9 = 7 || second method is sum of all the digits of the number, we will get the same value ==> 16 => 1+6 = 7
//         // 12 ==> 12-9 = 3 || 12 ==> 1+2 = 3
//         if (digit > 9) { digit -= 9; }
//         return digit;
//     }).reduce((accum, digit) => accum + Number(digit), 0);
//     // If the sum of all the digits is modulo of 10 then return true, otherwise return false
//     return doubleAndSum % 10 === 0;
// };


// in very simple ways
const validCardNumber = (str) => {
    return str
        .replace(/\D/g, "")                      // Remove non-digit characters
        .split("")                               // Split into digits
        .reverse()                               // Reverse the digits
        .map(Number)                             // Convert to numbers
        .map((digit, index) =>
            index % 2 !== 0 ? (digit * 2 > 9 ? digit * 2 - 9 : digit * 2) : digit // Double & subtract 9 if necessary
        )
        .reduce((accum, digit) => accum + digit, 0) % 10 === 0; // Sum and check modulo 10
};

console.log(validCardNumber("4539 1488 0343 6467")); // true
console.log(validCardNumber("6485 8975 6402 0229")); // false


// Array of String to Number and Array of Number to String
// const arr = ['45', '64', '78', '99', '01', '91'];
// const arr2 = [45, 64, 78, 99, 1, 0, 91]
// console.log(arr.map(Number));
// console.log(arr2.map(String));
