"use strict";
class Account {

    constructor(holder, accountNumber) {
        this._holder = holder;
        this._accountNumber = accountNumber;
        this._balance = 0;
        this._transactions = 0;
    }

    get holder() {
        return this._holder;
    }
    get accountNumber() {
        return this._accountNumber;
    }
    get balance() {
        return this._balance;
    }
    set transactions(transactions) {
        this._transactions = transactions;
    }
    get transactions() {
        return this._transactions;
    }

    depositMoney(money) {
        if (money > 0) {
            this._balance += money;
            this._transactions++;
        } else {
            document.getElementById("answer01").innerText = "You have to deposit at least 1,00 € !"
            return false;
        }
    }

    takeOutMoney(money) {
        if (money <= this._balance) {
            this._balance -= money;
            this._transactions++;
        } else {
            document.getElementById("answer01").innerText = "You don't have enough money in the account."
            return false;
        }
    }
}

