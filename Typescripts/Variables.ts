//Variable is a container which holds value
let n: string="Deepak"//need to mention the typescript
let age:number=36
let isFail:Boolean=false

let c:string="hello"
c="12"
console.log(n)
console.log(age)
console.log(c)
console.log(isFail)

var v:string="Hi"
console.log(v)
const pi:number=3.14
console.log(pi)

//Control statement - if, if else
    let digit:number=0
if(digit>0)
{
    console.log("didgit is positive")
}
else if (digit<0)
    {
    console.log("digit is negative")
}
else{
    console.log("digit is zero")
}

//switch
let clr:string="green"
switch(clr)
{
    case"yellow":
    console.log("wait")
    break

    case"green":
    console.log("wait")
    break
    default:
        console.log("obey traffic rule")
}

//for 
for (let i:number=0; i<5;i++)
 {
    console.log(i)
    
}

//while
let j:number=0
while(j<5)
{
    console.log(j)
    j++
}
