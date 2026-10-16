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



console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));