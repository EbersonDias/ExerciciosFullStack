const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App {

    //usuario
    static #users = []

    //verifica se o email existe, caso nao, retorna Null
    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    //Verifica email para não ficar duplicado
    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        if (!userExists) {
          this.#users.push(new User(email, fullname))
        }    
    }

    // metodo para fazer um deposito
    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
          const newDeposit = new Deposit(value)
          user.account.addDeposit(newDeposit)
        }
    }

    // metodo de transferencia
    static transfer (FromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(FromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser){
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer (newTransfer)
            toUser.account.addTransfer (newTransfer)
        }
    }

    //metodo de emprestimo
    static takeLoan (email, value, numberOfInstallments){
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value,numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    //metodo que muda a taxa do emprestimo
    static changeLoanFee(newFeePercentage){
        Loan.fee = newFeePercentage
    }
}