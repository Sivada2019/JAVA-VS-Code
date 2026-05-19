import data from './sample.json'with {type:"json"}
console.log(data.name)
let emp=
{
    fname:"Deepak",
    lname:" Vijayakumar",
    empID:"ID007",
    fullName:function()
    {
        return this.fname + this.lname
    }
}
console.log(emp.fullName())