function gonoVote(array) {
   if(!Array.isArray(array)){
    return "Invalid";
   }

   let ha=0;
   let na=0;
   
   for (let index = 0; index < array.length; index++) {
          if(array[index]==="ha"){
            ha++;
          }    
          else if(array[index]==="na"){
            na++;
          }    
   }

    if(ha===na){
        return "equal";

   }
   else if(ha>na){
    return true;
   }
   return false;
}


console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));