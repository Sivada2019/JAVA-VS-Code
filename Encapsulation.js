//Encapsulation - To protect data
class Atm{
    #balance=2000 //use #

    deposit(depAmnt)
    {
        this.#balance=this.#balance+depAmnt
        console.log("Inside deposit")
    }
    withdraw(wthAmnt)
    {
        this.#balance-=wthAmnt
        console.log("Inside withdraw")
    }

    checkBalance()
    {
        console.log(this.#balance)
        console.log("Inside check balance")
    }
}
let atm=new Atm()
atm.checkBalance()
atm.deposit(1000)
atm.checkBalance()
atm.withdraw(500)
atm.checkBalance()