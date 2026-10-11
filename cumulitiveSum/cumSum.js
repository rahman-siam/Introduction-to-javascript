let arr=[89,-6,34,-108,-89,78,-34,234,-987,1056];
let sum=0;
let cumArr=[];
for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
    console.log("array value is:",arr[i]);
    console.log("sum is:",sum);
    cumArr.push(sum);
}
console.log("\n");
console.log("cumArray is:",cumArr);

let maxValue=cumArr[0];
let minValue=cumArr[0];

for(let value of cumArr){
    if(value>maxValue){
        maxValue=value;
    }
    if(value<minValue){
        minValue=value;
    }
}

console.log("\n");
console.log("Max value is:",maxValue);
console.log("Min value is:",minValue);