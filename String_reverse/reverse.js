// reverse using for of
let phrase="Siam ekta valo chele for of";
let reverse="";
for( letter of phrase){
     reverse=letter+reverse;
  
}
  console.log(reverse);


// reverse using for loop
let phrases="Siam ekta valo chele for loop";
let reverses="";
for(let i=0;i<phrases.length;i++){
     reverses=phrases[i]+reverses;
}
 console.log(reverses);

 

// String Reverse: split(), reverse(), and join() (Shortcut Method)
let phrasess="Siam ekta valo chele shortcut";
console.log(phrasess.split("").reverse().join(""));


