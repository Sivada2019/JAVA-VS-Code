let text ="hello programming"
console.log(text)
console.log(text.length)//15
console.log(text.trim())
console.log(text.toUpperCase())
console.log(text.charAt(2))//1
console.log(text.charAt(2))//2
console.log(text.lastIndexOf('1'))//3
console.log(text.includes('program'))//true
console.log(text.startsWith('hello'))//true
console.log(text.endsWith('ing'))//program
console.log(text.substring(6,13))
console.log(text.slice(6,13))
console.log(text.replace('programming','world'))
let frts="apple,banana,orange"
let frtsArray =frts.split(',')
console.log(frtsArray)
console.log(frtsArray[1])
let splitTxt=text.split(' ')
console.log(splitTxt)
let a="hello"
let b="world"
console.log(a.concat(" ",b))
