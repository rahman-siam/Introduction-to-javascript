const isLeader=true;
let price=100;

// if(isLeader===true){
//     if(price>=1000){
//         price/=2;
//     }
//     else{
//         price=0;
//     }
// }
// else{
//     price+=1000;
// }

// console.log(price);

isLeader===true?((price>=1000)?price/=2:price=0):price+=1000;
console.log(price);