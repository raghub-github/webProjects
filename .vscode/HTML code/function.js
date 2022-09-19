console.log("This is Function of javaScript");

function greet(name){
    console.log(name + "Is a good boy");
}
function returnVal(a, b, c){
    let d = a+b+c;
    return d;
}
let name0 = "Suvendu";
let name1 = "Raghu";
let name2 = "Ankan";
// console.log(name0 +" Is a good boy");
// console.log(name1 +" Is a good boy");
// console.log(name2 +" Is a good boy");
greet(name0);
greet(name1);
greet(name2);

let a = 2, b = 9, c = 7;
// console.log(returnVal(a,b,c));

let sum = returnVal(a,b,c);
console.log(sum);
