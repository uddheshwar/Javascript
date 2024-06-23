//   ++++++++++++++++++++   Number   ++++++++++++++++++++++


const score = 100
const balance = new Number(100)
// console.log(score, balance)

//  -------  toString  -------  //

// console.log(typeof((balance.toString())))


//  -------  toFixed  --------  //
// console.log(score.toFixed(2),score.toFixed(1)) 

//  -------  toPrecision  ---------  //
const num = 23.7897897  
// console.log(num.toPrecision(2),num.toPrecision(3),num.toPrecision(1))

//  -------  toLocaleString  ---------  //
const morezero = 1000000
// console.log(morezero.toLocaleString())   // by default Us standard
// console.log(morezero.toLocaleString('en-IN'))  //  Indian standard



//    +++++++++++++++++++++++       Math       +++++++++++++++++++++++
     // Math consist of specific labrary in js, 
     // it is an object which contains funnctions

//  ----------      abs(), round(), ceil(), floor(), min(), max()    -----------  //
     // it converts only (- sign) into  (+ sign)

     // console.log(Math)
    // console.log(Math.abs(-5))
    //  console.log(Math.round(4.7), (Math.ceil(4.3)), (Math.floor(4.8)))

    console.log (Math.max(4,47,2,9),  Math.min(6,98,3,5,1,0))
   
   //  -------    random()    ---------  //
   
   const min = 10
   const max = 20
   console.log(Math.random())     //  it gives random values between 0-1
   console.log(Math.random()*10)  //  it gives random values between 1-10 (for ex-0.24)
   console.log(Math.random()*10+1)  //  it gives random values between 1-10 (for ex-0.024)
   console.log(Math.floor(Math.random()*10+1))  //  it gives random values between 1-10 (not in decimals)
   console.log(Math.floor(Math.random()*(max-min+1)+ min))  // it gives random values between 10-20