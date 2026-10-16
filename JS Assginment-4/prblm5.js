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


console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));