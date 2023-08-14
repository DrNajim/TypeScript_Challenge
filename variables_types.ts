//Types of variables

let variable:string;
let test:number=45

let StringOrNumber: string | number

variable="54"
StringOrNumber=25
StringOrNumber="6"

//Array

let names=["john","Ahmed","Younes"]
names.push("Jillali")
// names.push(3)

let numbers=[65,24,245]
numbers.push(98)
// numbers.push("teg")

let testString: string[]
// testString=[69]
testString=["yo","hey","No!"]

let testnumber: number[]
// testString=[69]
testnumber=[98,98,65]

let testNumberorString: (string | number)[]
testNumberorString=[54,95,"test","training", "Making Fun"]

//Objects
let users={
    name:"Youssef",
    age:15,
    isAdmin:false
}
users.name="wifeyoussef"
// users.name=55
                                                                                                                                                                                                
let userObj:{
    username:string,
    userage:number,
    isAdmin:boolean
}
userObj={
    username:"john",
    userage:21,
    isAdmin:true
    // phone:"+11212145"
}

let userObj2:{
    username:string,
    userage:number,
    isAdmin:boolean,
    phone?:string
}
userObj2={
    username:"john_TEST",
    userage:43,
    isAdmin:true,
    phone:"+11212145"
}

//ANY
let testAny;
testAny=98;
testAny="test";
testAny=false;
testAny=[true]

let makeAny : any;
