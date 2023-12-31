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

//INTERFACES
 interface IUserClient{
    Username:string, 
    Userage:number,
    Userphone?:string,
    Email:string
 }
interface IEmployee extends IUserClient{
    employeeId:number
}
const emp:IEmployee={
    Username:"YAssine", 
    Userage:35,
    Userphone:"+212 65456545",
    Email:"test@test.com",
    employeeId:659800
}
const client:IUserClient={
    Username:"Testname", 
    Userage:35,
    Userphone:"+212 65454445",
    Email:"test@test.com",
}
//GENERICS
interface IAuthor{
    id:number,
    username:string
}
interface ICategory{
    id:number,
    title:string

}
interface ipOST{
    ID:number,
    title:string,
    desc:string,
    extra :IAuthor[]|ICategory[]
}

interface IPOstbetter<T>{
    ID:number,
    title:string,
    desc:string,
    extra :T[]
}
const testMe:IPOstbetter<String>={
    ID:99,
    title:"testbetter",
    desc:"This here",
    extra :["obe","Two", "why not Five"]
}
const testMe2:IPOstbetter<IAuthor>={
    ID:99,
    title:"testbetter",
    desc:"This here",
    extra :[{id:9999, username:"string"}]
}

interface IPOstevenbetter<T extends object>{
    ID:number,
    title:string,
    desc:string,
    extra :T[]
}
const testMe3:IPOstevenbetter<IAuthor>={
    ID:99,
    title:"testbetter",
    desc:"This here",
    extra :[{id:9999, username:"string"}]
}