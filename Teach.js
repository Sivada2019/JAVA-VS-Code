//Polymorphism -child
import { Workers } from "./Workers.js";

class Teach extends Workers
{
    Teach()
    {
        console.log("Teach")
    }

    OverTime()
    {
        console.log("Teach over Time")
    }
    }
    let t1= new Teach()
    t1.OverTime()
    t1.Teach()
