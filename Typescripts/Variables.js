"use strict";
//Variable is a container which holds value
let n = "Deepak"; //need to mention the typescript
let age = 36;
let isFail = false;
let c = "hello";
c = "12";
console.log(n);
console.log(age);
console.log(c);
console.log(isFail);
var v = "Hi";
console.log(v);
const pi = 3.14;
console.log(pi);
//Control statement - if, if else
let digit = 0;
if (digit > 0) {
    console.log("didgit is positive");
}
else if (digit < 0) {
    console.log("digit is negative");
}
else {
    console.log("digit is zero");
}
//switch
let clr = "green";
switch (clr) {
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("wait");
        break;
    default:
        console.log("obey traffic rule");
}
//for while
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
