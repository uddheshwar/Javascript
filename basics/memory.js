// 1. stack memory


let name=("India")
let changename= name
 changename=("Bharat")


//  heap memory


let object1= {
    user:"new",
    email: "gmail.com"
}
let object2=object1
object2.email="outlook.com"

    


console.log(name,changename,object1.email,object2.email)