class BankAccount {
    constructor(rut, nombre, saldo, direccion) {
        this.rut = rut
        this.nombre = nombre
        this.saldo = saldo
        this.direccion = direccion
        this.numberAccount = Math.random
        this.isActivate = true
    }

    changeStatusAccount(status) {
        this.isActivate = status
    }

    closeAcount() {
        this.saldo = 0
        this.changeStatusAccount(false)
    }

    transferCredit(destination, amount) {
        // Veo si cuenta esta activa
        if (!this.isActivate) {
            console.log("No se puede transferir de una cuenta inactiva")
            return;
        }

        // Reviso si el balance de la cuenta es mayor a lo ingresado
        if (this.saldo < amount) {
            console.log("saldo insuficiente")
            return;
        }

        // Transferencia
        this.saldo -= amount
        destination.creditCharge(amount)

    }

    getCredit() {
        return this.saldo
    }

    creditCharge(credit) {
        this.saldo += credit
    }

    creditWithdraw(credit) {
        this.saldo -= credit
    }
}

class CreditAccount extends BankAccount {
    constructor(rut, nombre, saldo, direccion) {
        super(rut, nombre, saldo, direccion)
        this.creditCardLimit = 1000000
        this.creditLine = 300000
        this.usedCredit = 0
    }

    payCreditCard(amount) {
        this.creditCardLimit += amount
        this.usedCredit -= amount
    }

    usedCreditCard(amount) {
        this.creditCardLimit -= amount
        this.usedCredit += amount
    }
}


const account1 = new BankAccount('111111111-1', 'Zafrada', 1000000, 'Mi Dirección')
const account2 = new CreditAccount('22222222-2', 'Tilin', 2000000, 'Dale Tilin');




account1.transferCredit(account2, 500000)
console.log(account1)
console.log(account2)