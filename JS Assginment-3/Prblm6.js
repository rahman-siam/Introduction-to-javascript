/** Problem 06 :  (Current Salary )  */
// হাসান সাহেব সরকারী চাকুরী করেন ।  তিনি কত বছর ধরে  চাকুরী করেন  সেটা  experience নামে একটা ভ্যারিয়েবলে Save করা আছে । হাসান সাহেবে যে salary দিয়ে জয়েন করেছেন সেটা startingSalary নামে একটা ভ্যারিয়েবলে save করা আছে। প্রতি বছর হাসান সাহেবের স্যালারি ৫% করে বৃদ্ধি হয় । হাসান সাহেবের বর্তমান স্যালারি  কত সেটা বের করার জন্য প্রোগ্রাম লেখো। দশমিকের পর সর্বোচ্চ ২ ডিজিট সংখ্যা থাকবে।  এবং নিচের মতো করে আউটপুট দেখাবে। 

// startingSalary
// (0 < number <=106 ) 
// 45000
// 15000
// 30000

// experience
// (0 < number <=50 ) 
// 30 
// 3
// 40

// Output ( up to 2 Decimal ) 
// 194487.41
// 17364.38
// 211199.66





var experience = 40;
var startingSalary = 30000;

for(i=1;i<=experience;i++){
    startingSalary=(startingSalary+(startingSalary*(5/100)));
}
console.log(startingSalary.toFixed(2));