// const fizzBuzz = (a,b) =>{
//     let arr = [];
//     for(let i=a; i<=b; i++){
//         if(i%3===0 && i%5===0){
//             arr.push("FizzBuzz");
//         }else if(i%3!==0 && i%5===0){
//             arr.push("Buzz");
//         }else if(i%3===0 && i%5!==0){
//             arr.push("Fizz");
//         }else{
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// IN SHORT FORM
const fizzBuzz = (a, b) =>
    Array.from({ length: b - a + 1 }, (_, i) => {
        let num = a + i;
        return num % 15 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : num;
    });

// console.log(fizzBuzz(2, 15));                    

const arrform = (a, b) =>  Array.from({ length: b - a + 1 }, (_, i) => a + i);
console.log(arrform(2, 15).map(String));
