function fun1(callback)
{
    console.log("fun1 is called")
    callback()
}
function fun2(callback)
{
    console.log("fun2 is called")
    callback()
}
function fun3(callback)
{
    console.log("fun3 is called")
    callback()
}
fun1(function()
{
    fun2(function(){
        fun3(function(){
console.log("All functions are called")
        })
    })
})
    
   