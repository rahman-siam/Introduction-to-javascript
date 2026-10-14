let Products=[{Name:"Shirt",Price:1300,quantity:3},
             {Name:"Panjabi",Price:2500,quantity:1},
             {Name:"Shoe",Price:2000,quantity:3},
             {Name:"Pant",Price:600,quantity:2},]

 function shopping(items){
    totalCost=0;
    for(let item of items){
        totalCost=(totalCost+(item["Price"]*item["quantity"]));
       
    }
    return totalCost;

 }   
 
 console.log("Total Price:",shopping(Products));