let name = ("Pandurang")
let fathername = ("Bharat")
let surname = ("Gangaji")

// console.log(name,fathername,surname)


//   ---------  anchor() ---------

//  Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. 
// Use DOM APIs such as document.createElement() instead.
// The HTML specification no longer allows the <a> element to have a name attribute, 
// so this method doesn't even create valid markup.




// var newelement = document.createElement('span')
// var newtext = document.createTextNode("This text is generated by using javascript")
// var newcomment = document.createComment("This is commented by using javascript")

// console.log(newelement,newtext,newcomment)


//            --------- at()---------

// const atelement = 'Javascript consist two memory:- 1) stack  2) heap';

// console.log(` ${atelement.at(4)}`)


//            --------- chartAt()---------

const fullname = "Pandurang Bharat Gangaji"
//console.log(` ${fullname.charAt(0)}`)


//           ---------  toUpperCase()   toLowerCase() ---------

const Greatcountry= ("Bharat")
const words = ("Dhoom")
const TheGreatcountry= Greatcountry.slice(3,4)
// console.log (TheGreatcountry.toUpperCase(),words.toLowerCase())



//    ------  trim()   trimStart()  trimEnd()  trimLeft()  trimRight()  ------


const app = (" web app  ")
const first = app.trim()
const second = app.trimStart()
const third = app.trimEnd()
const fourth = app.trimLeft()
const fifth = app.trimRight()

// console.table ([app,first,second,third,fourth,fifth])


//           --------- substring()---------

const collagename = ("GPND")
const collage = collagename.substring(0,3)

//           --------- indexOf()---------
const index = collagename.indexOf('N')

//           --------- replace()---------
const repl = (collagename.replace("GPND","SINHGAD"))

console.log (collagename, collage,index,repl)
