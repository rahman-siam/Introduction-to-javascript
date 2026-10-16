//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
if((typeof currentPrice !== "number") || (typeof discount !== "number") || (0>discount>100)){
    return "Invalid";
}
else{
    currentPrice=currentPrice-(currentPrice*(discount/100));
    return currentPrice.toFixed(3);
}

}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
if(typeof otp !== "string"){
    return "Invalid";
}

if((otp.length !== 8) || !otp.startsWith("ph-")){
    return false;
}

else{
    return true;
}

}


//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
       let scoreCount=omr.right;

       if ((typeof omr !== "object") || (Array.isArray(omr)) || (omr.right+omr.wrong+omr.skip)!==100) {
             return "Invalid";    
       }
       
       else{
        
        for (let index = 0; index < omr.wrong; index++) {
            scoreCount=scoreCount-0.5;
            
        }

       }

       return Math.round(scoreCount);
}


//Problem-04: Upcoming Gono Vote
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


//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
   let longWords="";
    if(typeof str !== "string" || str.trim().length===0){
        return "Invalid";
    }
    else{
        for (let index = 0; index < ((str.split(" ")).length); index++) {
            
            if(longWords.length<((str.split(" "))[index].length)){
                longWords=str.split(" ")[index];
            }
        }
    }
    let token=str.split(" ").join("").length;
    return {
         longwords: longWords, token: token
    };
}


