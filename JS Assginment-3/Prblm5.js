/** Problem 05 - ( PH Email Generator )  */
// { name: string , roll: number ,department: string  }

// উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে 
// name roll . department @ph.ac.bd

// Value of  Student ( object ) 
// { name: "jhankar" , roll: 1014 ,department: "cse"  }
// { name: "monu" , roll: 99,department: "eee"  }
// { name: "mewo" , roll: 96 ,department: "cse"  }

// Output (string)
// jhankar1014.cse@ph.ac.bd
// monu99.eee@ph.ac.bd
// mewo96.cse@ph.ac.bd

var student={ name: "mewo" , roll: 96 ,department: "cse"  }

console.log(student.name+student.roll+"."+student.department+"@ph.ac.bd");