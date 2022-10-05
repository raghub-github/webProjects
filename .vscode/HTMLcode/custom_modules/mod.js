console.log("This is module");
function avearge(arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: avearge,
    name: "Sandip",
    repo: "GitHub"
}
module.exports.name = "Snadip";