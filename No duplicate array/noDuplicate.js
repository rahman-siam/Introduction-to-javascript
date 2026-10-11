let arr1=[3,8,8,4,6,4,9,2,3,9,56,98,45,34,56];

function noDuplicate(num){
    arr2=[];

    for (let i = 0; i < num.length; i++) {
       if(arr2.includes(num[i])===false){
        arr2.push(num[i]);

       }
    }
    return arr2;
}

console.log(noDuplicate(arr1));