//function without parameter and without return typescript
function sayhello():void //void means no return type
{
    console.log("Hello")
    console.log("function with no parameter and no return type")
}
sayhello()

//function with parameter and no return value
function greet(name:string,age:number)
{
    console.log("hello my name is "+name + "and my age is "+age)
}
greet("Reshma",12)

//function with parameters and retun type
function addition(a:number,b:number):number
{
return a+b
}
let sum= addition(10,20)
console.log("the sum is " +sum)