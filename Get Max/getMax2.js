let height=[45,98,9,56,234,98,999,24,87,23];
function getMaxHeight(numbers){
let max=numbers[0];
   for(let num of numbers ){
    if(num>max){
        max=num;
    }
   }
   return max;
}

console.log("Max height is:",getMaxHeight(height));