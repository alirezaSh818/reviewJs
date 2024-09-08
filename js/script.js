
console.log("connected...");

//Named Function 
function findBiggestNumber(a,b){

    var result;
    a>b ? result=["first number ",a] : result=["second number " , b];
    return result;
}

var big = findBiggestNumber(32,45);

console.log(big[0],big[1]);