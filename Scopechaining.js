//Scope of the variable depends on the inner function, if not it will take from outer function first and then take globally
let b=2//global variable
function OuterFunction()
{
    let a=8
    let b=6
    function innerFunction()
    {
        let a=9
        console.log(a)
        console.log(b)
    }
    innerFunction()
}
OuterFunction()

//second pgm
let x=10
function fun1()
{
    console.log(x)
}
function fun2()
{
    fun1()
}
fun2()