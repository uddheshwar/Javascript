 //  ---------   Leap year challenge   ---------   //

 function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.      
    
     if(year % 4 === 0){
         if(year % 100 === 0){
             if (year % 400 ===0){
                 return "Leap year.";}
                 else {return "Not leap year."}
             }
         else{return "Leap year.";        
         }   
     }else{return "Not leap year.";     
     }
         
    /**************Don't change the code below****************/   

    }

    isLeap(2000);
   
    
       
    // ------- increasing count by 1, addng "fizz" at divisable by 3 and
    // adding "Buzz" at divisable by 5 and adding "fizBuzz" at divisable by 
    //  3 and 5


    var output = [];
var count = 1;

function fizBuzz() {
 output.push(count);
 count++;
    console.log(output);
 
if(count%5===0 && count%3===0){
  output.push("fizBuzz")
}
 
 else if (count%3===0){
  output.push("fizz")
 }

 else if(count%5===0){
  output.push("Buzz")
 }

}

