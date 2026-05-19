//A function cabn use variables outside of it
function Mybox()
{
    let myprdt="phone"
    function getprdt()
    {
        console.log(myprdt)
    }
    return getprdt
}
let box=Mybox()
box()
box()
//second pgm
function Timer()
{
    let count =100
    return function Timer1()
{
console.log(count)
count=count+1
}
}
const t=Timer()
t()
t()


