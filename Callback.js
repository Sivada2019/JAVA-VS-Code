//Callback function that pass another function as argument
//normal function
function Greet(name)
{
    console.log("Gud mng  "+name)
}
Greet("Anu")

//callback function
function wishMe(name,callback)
{
    console.log("Good Morning "+ name)
    callback()
}
function sayHi()
{
    console.log("hai")
}
wishMe("Reshma", sayHi)