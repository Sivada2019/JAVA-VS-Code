// Functions -Ii is a mini program which helps to reuse the code
function sayHello() //function declaration
{
    console.log("Hello")
}

sayHello() //function call

//Function with parameters
function sayName(name)
{
    console.log("welcome"+name)
}
sayName("Alice")//function call with argument
sayName("Bob")
sayName("Shani")

//Function with Return keyword
function add(a,b)//first example
{
    let sum=a+b
    return sum//return=a+b
}
function fullName(fName,lName)//second example
{
    return fName+" "+lName
}
let result=add(2,4)
console.log(result)
console.log(add(5,10))
console.log(fullName("john","doe"))

//Arrow functions
//const functionName=(parameters)=>{code} //()=>{}
const sub=(c,d)=>{return c-d}//example 1
console.log(sub(12,3))
console.log(sub(20,5))
let mul=(e,f)=>{console.log(e*f)}//example 2 without return
mul(4,5)
let pli=(x,y)=>{console.log(x*y)}//example 3 without return
pli(10,10)

//scope of variable -scope of var is not limited inside the bock
function testvar()
{
    if(true){
var z=80
console.log(z)//inside block
    }
    console.log(z)//outside block
}
testvar()

//scope of variable -scope of let is only limited inside the block
function testlet()
{
    if(true){
let z=20
console.log(z)//inside block
    }
        //console.log(z)//outside block
}
testlet()
//global variable using var or Let
var sums= 10

function add()
{
    console.log(sums + 5)
}
function substraction()
{
    console.log(sums - 5)
}
console.log("count is"+ sums)
add()
substraction()
