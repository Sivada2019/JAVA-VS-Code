//homework - print hello world 10 times using while
k=1
while(k<=10)
{
    console.log("hello")
    k++
}
//homework - print hello world 10 times using for loop
let i=1
for (i=1;i<=10;i++)
    {
        console.log("Hello")

}
//homework- Vowels using switch statement
let vowels = "z"
switch(vowels)
{
    case "a":
        console.log("a")
        break
        case "e":
            console.log("e")
             break
            case "i":
                console.log("i")
                 break
                case "o":
                    console.log("o")
                     break
                case "u":
                    console.log("u")
                     break
                    default:
                        console.log("Not vowel")
}
// Print odd numbers (1 to 10) - for and if
//const

//Even numbers using filter method
let even=[1,2,3,4,5,6,7,8,9,10]
let filterArray = even.filter(m=> m%2===0)
console.log(filterArray)

// Double the number using mapping method
let Double=[1,2,3]
let numDouble=Double.map(x=> x+x)
console.log(numDouble)

//Multiplicatiom using reduce method
let mul=[1,2,3,4]
let totalMul=mul.reduce((total,val)=>total*val,1)
console.log(totalMul)


