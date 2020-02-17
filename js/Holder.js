"use strict";
class Holder {

    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
        this._accounts = new Array();
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set surname(surname) {
        this._surname = surname;
    }
    get surname() {
        return this._surname;
    }
    get accounts() {
        return this._accounts;
    }
    addAccount(account) {
        this._accounts.push(account);
    }
} 


