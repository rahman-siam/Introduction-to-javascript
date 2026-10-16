function totalFine( fare ) {
        
          if((typeof fare !== 'number') || (fare<=0)){
            return "Invalid";
          }

          else{
            let fine=(fare+(fare*(20/100))+30);
            return fine;
          }

}



function  onlyCharacter( str ) {
     if(typeof str !== "string"){
        return "Invalid";
     }
     else{
        let strSplit=str.split(" ").join("").toUpperCase();
        return strSplit;
     }
}


function  bestTeam( player1, player2 ) {

    if((typeof player1 === "object") && (player1 !== null) && (Array.isArray(player1)===false)
        && (typeof player2 === "object") && (player2 !== null) && (Array.isArray(player2)===false)){
        if((player1.foul+player1.cardY+player1.cardR)<(player2.foul+player2.cardY+player2.cardR)){
            return player1.name;
        }
        else if((player1.foul+player1.cardY+player1.cardR)===(player2.foul+player2.cardY+player2.cardR)){
            return "Tie";
        }
        else{
            return player2.name;
        }
    }

    else{
        return "Invalid";
    }
        
    }



    function  isSame(arr1 , arr2 ) {
         if(!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "Invalid";
         }
         if(arr1.length!==arr2.length){
             return false;
         }
         else{
            for (let index = 0; index < arr1.length; index++) {
                if(arr1[index] !== arr2[index]){
                    return false
                }
                
            }
         }

         return true;
}



function  resultReport( marks ) {
        if(!Array.isArray(marks)){
             return "Invalid";
        }
        if(marks.length===0){
                  return{ finalScore: 0 , pass: 0, fail: 0};
            }
        else{
            let passCount=0;
            let failCount=0;
            let scoreCount=0;

            for (const mark of marks) {
                scoreCount=mark+scoreCount;
                if(mark>=40){
                    passCount++;
                }
                else{
                    failCount++;
                }
                
            }
           
            return {
                 finalScore: Math.round(scoreCount/marks.length) , pass: passCount, fail: failCount
            };
        }

}
