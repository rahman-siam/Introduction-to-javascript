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


console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(" "));