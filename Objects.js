//Object creation in js

let pen=
{
    colour:"Black",
    brand:"Lexi",
    price:12
}  
console.log(pen)
console.log(pen.colour)//representing with dot notation
console.log(pen["colour"])//representing with bracket notation
console.log(pen)
pen.location="Mumbai"//add
console.log(pen)
pen.colour="Pink"//update
console.log(pen)
delete pen.location//delete
console.log(pen)
//nested objects
let stud={
    name:"Reshma",
    rollno:48,
    marks:{
        eng:90,
        hindi:20,
        physics:10

    },
    sub:["java","js","c"],
    isPass:true
}
console.log(stud)
console.log(stud.marks.eng)
console.log(stud)
console.log(stud.sub[2])
console.log(stud.isPass)
//Looping java script using for....in
for(let key in stud)
{
    console.log(key +":"+stud[key])
}

//function in oject
let student={
    name:"Reshma",
    rollno:48,
    isPass:true,
    fun :function()
    {
        console.log("its a function inside javascript")
    } 

}
 student.fun()
 for( let key in student)
 {
    if(typeof student[key]==="function")
    {
        student[key]()
    }
    else
        {
            console.log(key + ":" +student[key])
    }
 }

