//Arrays
//no.of elements in the array is 7
//index 0,1,2,3,4,5,6
let numbers=[1,2,3,4,5,6,7] //number array
console.log(numbers)
let fruits=["apple","banana","orange"]//string array
console.log(fruits)
console.log(fruits[2]) //printing of index 2
numbers[3]=40 //update the value of index 3
console.log(numbers)
console.log(numbers.length)//.length is a method to find the length
console.log(fruits.length)

//iterate the array using for loop
let sum =[1,2,3]
for(let i=0;i<sum.length;i++)
{
    console.log(sum[i])
}
//Methods in Arrays
let arr=[1,2,3]
console.log(arr)
arr.push(5)//Add element at the end
console.log(arr)
arr.pop()
console.log(arr)//Remove element at the end
arr.unshift(10)//Add element at the beginning
console.log(arr)
arr.shift()//Remove the element at the beginning
console.log(arr)
console.log(arr.length)//print the length of array
console.log(arr.indexOf(1))//It return the index of the occurrence of element
console.log(arr)
console.log(arr.indexOf(5))//If not, it display -1
let bool=arr.includes(3)
console.log(bool)//It returns true if the element is present , otherwise false

//Slice method- It display a new array containing the start index to end index
let ar1=[11,12,13,14,15]
console.log(ar1)
let newArr=ar1.slice(1,4)
console.log(newArr)

//Splice method
ar1.splice(0,2)  //start index and no: of elements to be removed
console.log("after removing elements: " +ar1)
ar1.splice(2,3,4)//start index,delete count,elements to be added
console.log("after replacing elements: "+ar1)

//sum of arrays
let mark=[12,22,10,3]
let sums=0
for(let i=0;i<mark.length;i++)
{
    sums=sums+mark[i]

}
console.log("total mark is "+ sums)

//Reduce Method -It is used to find sum of array or reduce array elements into a single value
let totalMark=mark.reduce((total,val)=>total+val,0)
console.log("using reduce method " +totalMark)

//Filter method -select elements based on a condition
let filterArray = mark.filter(m=> m>10)
console.log(filterArray)

//Map method-Take each value, change it based on the condition and gives new array
let graceMark=mark.map(x=> x+5)
console.log(graceMark)
//filter = even 
//map = double
//reduce=multiplication