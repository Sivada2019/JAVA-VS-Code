"use strict";
class Student {
    name;
    age;
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(name);
        console.log(age);
    }
    showDetail() {
        console.log("Student name is =" + this.name);
        console.log("Student age is = " + this.age);
    }
    displayMark(sub, mark) {
        return sub + "=" + mark;
    }
}
//object creation
let s = new Student("simi", 24);
s.showDetail();
let simiMark = s.displayMark("maths", 90);
let s3 = new Student("Reshma", 30);
s3.showDetail();
let ReshmaMark = s3.displayMark("english", 35);
console.log(simiMark);
console.log(ReshmaMark);
