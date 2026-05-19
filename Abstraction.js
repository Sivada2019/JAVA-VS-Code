//Abstraction -it is used to private methods or functions
class Abstraction
{
    start()
    {
        this.#engineOn()
        console.log("jeep start")
    }
    #engineOn()
    {
        console.log("jeep Engine on")
    }
}
let j1=new Abstraction()
j1.start()
