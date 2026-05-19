//Inheritance- child
import { Mobile } from "./Mobile.js";
class Nokia extends Mobile
{
textMsg()
{
    console.log("nokia phone")
}
}
let n= new Nokia()
n.textMsg()
n.phoneCall()
//Nokia-child class
//Mobile -Parent class
