//Loops - It is used to repeat a block of code 

// 1. for loop

   /* let i=1;      i<=10;      i++(i+1)
for(initialization; condition; updation(increment/decrement)){
    code to be executed
}*/
for(let i=1;i<=10;i++)
{
    console.log(i)
}
// 2. while loop

k=0
while(k<=10)
{
    console.log(k)
    k++
}
// 3. Do While

/*do{
code
updation}
while(condition)*/
//run atleast once even if condition is false
let i=1
do{
    console.log(i)
    i++
}
while(i<=5)

//4. break (exit when condition meets)

for(let i=0;i<=5;i++)
{
    if(i==3){
        break
    }
    console.log(i)
}
//5. continue (skip the step when condition meets)

for(let i=0;i<=5;i++)
{
    if(i==3){
        continue
    }
    console.log(i)
}
// 6. for ...of loop(used for arrays)
let arr=[1,2,3,4,5,6]
console.log(arr)
for(let a of arr)
    {
console.log(a)
}

let colour=["yellow","Blue","Black"]
for(clr of colour)
{
    console.log(clr)
}

// 7. for....in loop(used for objects)
