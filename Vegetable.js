//Classes- Class name should be same as that of file name
class Vegetable
{
    constructor(name,price)
    {
      this.name=name
      this.price=price     
        
    }
    info()
    {
        console.log(this.name)
        console.log(this.price)
    }
}
let v= new Vegetable("tomato",12)//object creation
v.info()

let v1=new Vegetable("Potato",23)
v1.info()

//Inheritance
