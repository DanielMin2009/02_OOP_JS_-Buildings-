"use strict";
var accounts = new Array();
var holders = new Array();
var account;

function addHolder() {
    var name = document.getElementById("txtName").value;
    var surname = document.getElementById("txtSurname").value;
    let newHolder = new Holder(name, surname);
    holders.push(newHolder);

    //newHolder.addAccount(new Account());

    console.log(holders);
}

function createAccount() {

    var introName = document.getElementById("txtHolderName").value;
    var accountNumber = parseInt(document.getElementById("txtAccount").value);

    let i = 0;
    var found = false;

    do {
        var user = holders[i]._name + " " + holders[i]._surname;
        if (user === introName) {
            found = true;
            var newAccount = new Account(user, accountNumber);
            holders[i].addAccount(newAccount);
            console.log(newAccount);
            document.getElementById("answer02").removeAttribute("class");
            document.getElementById("answer03").innerHTML +=
                "<span>" +
                newAccount._holder +
                "</span>" +
                "<span>" +
                newAccount._accountNumber +
                "</span>";
        }
        i++;
    } while ((!found) && (i < holders.length));

    if (!found) {
        document.getElementById("answer01").innerHTML =
            "This holder does not exist.";
    }

}

function depositClick() {
    let introName = document.getElementById("txtNameMove").value;
    let introAccount = parseInt(document.getElementById("txtAccountMov").value);
    let amount = parseInt(document.getElementById("txtAmount").value);

    let i = 0;
    let j = 0;

    for (i = 0; i < holders.length; i++) {
        var user = holders[i]._name + " " + holders[i]._surname;
        if (user === introName) {
            for (j = 0; j < holders[i].accounts.length; j++) {
                if (holders[i].accounts[j].accountNumber === introAccount) {
                    holders[i].accounts[j].depositMoney(amount);
                    console.log(holders[i].accounts[j].balance);

                    document.getElementById("answer01").setAttribute("class", "dnone");
                    document.getElementById("answer02").setAttribute("class", "dnone");
                    document.getElementById("answer03").setAttribute("class", "dnone");

                    document.getElementById("showMovements").removeAttribute("class");
                    document.getElementById("answerShowMovements").innerHTML +=
                        "<span>" +
                        user +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].accountNumber +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].balance + " €" +
                        "</span>" + 
                        "<span>" +
                        holders[i].accounts[j].transactions +
                        "</span>";
                }
            }
        }
    }

}

function takeOutClick() {
    let introName = document.getElementById("txtNameMove").value;
    let introAccount = parseInt(document.getElementById("txtAccountMov").value);
    let amount = parseInt(document.getElementById("txtAmount").value);

    let i = 0;
    let j = 0;

    for (i = 0; i < holders.length; i++) {
        var user = holders[i]._name + " " + holders[i]._surname;
        if (user === introName) {
            for (j = 0; j < holders[i].accounts.length; j++) {
                if (holders[i].accounts[j].accountNumber === introAccount) {
                    holders[i].accounts[j].takeOutMoney(amount);
                    console.log(holders[i].accounts[j].balance);

                    document.getElementById("answer01").setAttribute("class", "dnone");
                    document.getElementById("answer02").setAttribute("class", "dnone");
                    document.getElementById("answer03").setAttribute("class", "dnone");

                    document.getElementById("showMovements").removeAttribute("class");
                    document.getElementById("answerShowMovements").innerHTML +=
                        "<span>" +
                        user +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].accountNumber +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].balance + " €" +
                        "</span>" + 
                        "<span>" +
                        holders[i].accounts[j].transactions +
                        "</span>";

                }
            }
        }
    }
}


function checkBalance() {

    let introName = document.getElementById("txtNameChk").value;
    let introAccount = parseInt(document.getElementById("txtAccountChk").value);

    let i = 0;
    let j = 0;

    for (i = 0; i < holders.length; i++) {
        var user = holders[i]._name + " " + holders[i]._surname;
        if (user === introName) {
            for (j = 0; j < holders[i].accounts.length; j++) {
                if (holders[i].accounts[j].accountNumber === introAccount) {

                    document.getElementById("answer01").setAttribute("class", "dnone");
                    document.getElementById("answer02").setAttribute("class", "dnone");
                    document.getElementById("answer03").setAttribute("class", "dnone");
                    document.getElementById("showMovements").setAttribute("class", "dnone");
                    document.getElementById("answerShowMovements").setAttribute("class", "dnone");

                    document.getElementById("showBalance").removeAttribute("class");
                    document.getElementById("answerShowBalance").innerHTML +=
                        "<span>" +
                        user +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].accountNumber +
                        "</span>" +
                        "<span>" +
                        holders[i].accounts[j].balance + " €" +
                        "</span>";

                }
            }
        }
    }
}


/*
Disenyar un programa per un banc que permeti fer el control d'un compte corrent. El programa ha de tenir la classe Compte que té les següents dades:

Titular
Saldo
Número de moviments realitzats sobre el compte bancari


Aquesta classe tindrà disponible les següents operacions:

ingressar(quantitat) : permet ingressar diners en el compte del client i incrementa el número de moviments
treure(int quantitat) : permet treure diners del compte sempre que hi hagi prou saldo, també incrementarà el número de moviments.
retornarSaldo() : retorna quants diners hi ha en el compte.
obtenirNumeroTransaccions() : retorna el número de transaccions que s'han realitzat

El programa ha de tenir un menú amb les operacions disponibles:

- Ingressar diners
- Treure diners
- Consultar saldo i número de transaccions realitzades
- Sortir del programa

Ampliació: Ara el programa ha de permetre gestionar més d’un compte bancari

Caris titulars. Mes d’un titular i mes d’un compre bancari x titular
*/