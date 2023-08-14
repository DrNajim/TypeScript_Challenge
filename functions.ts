// functions
let sayHi=() =>{
    console.log("Hi, Welcome")
}
// sayHi="Hi"
let testthisFunt= ():string =>{
    console.log("Hi, Welcome, It is nice to see you");
    return "NAJIM Abdessamad"
}
let multiple=(num:number)=>{
    return num*2
}
let multiple2=(num:number):number=>{
    return num*2
}
let multiple3=(num:number):void=>{
    // return num*2
    //Do somthing but dont return
}

let sum=(nm1:number,num2:number,numOther?:number)=>{
return nm1+num2
}
sum(2,3)

let funct=(useragent:{name:string, age:number,phone?:string})=>{
    console.log(useragent.name)
}

//TYPE ALIASES
type UserType={
    Username:string, 
    Userage:number,
    Userphone?:string
}
let BetterFunc=(userEmployee:UserType)=>{
    console.log(userEmployee.Username)
}

type myExer=(a:number,b:string)=>void
let BestFunct:myExer=(num,str)=>{
    console.log(num+"times"+str)
}

type UserType2={
    Username:string, 
    Userage:number,
    Userphone?:string,
    theme: "Dark"|"Light"
}
const PlanWithTheme:UserType2={
    Username:"Noah", 
    Userage:16,
    // theme: "pink"
    theme:"Dark"
}

