"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.container button');
    if (btn !== null) {
        btn.addEventListener('click', aggiorna);
    }
});
let num_1;
let num_2;
class CurrentAccount {
    constructor(name, bank, saldo, interesse) {
        this.name = name;
        this.bank = bank;
        this.saldo = saldo;
        this.interesse = interesse;
        CurrentAccount.transactions++;
    }
    // protected oneDeposit:number = 0;
    // oneWithdraw
    // protected twoDeposit:number = 0;
    //  twoWithdraw
    addinterest() {
        return this.saldo * this.interesse;
    }
    balance(versamento, prelievio) {
        return this.saldo + versamento - prelievio;
    }
}
class Son extends CurrentAccount {
    constructor(name, bank, saldo, interesse) {
        super(name, bank, saldo, interesse);
    }
}
let Account = new Son("Craig", "Bofa", 0, .1);
function aggiorna() {
    var _a;
    let versamento = document.querySelector('.container input[name="versamento"]');
    let prelievio = document.querySelector('.container input[name="prelievo"]');
    CurrentAccount.transactions++;
    num_1 = +versamento.value;
    num_2 = +prelievio.value;
    Account.saldo = Account.balance(num_1, num_2);
    (_a = document.querySelector('.conto')) === null || _a === void 0 ? void 0 : _a.innerHTML = `<h1>Conto Nome:</h1>
                                                   <p>${Account.name}</p>
                                                   <h1>Saldo:</h1>
                                                   <p>€${Account.saldo}</p>
                                                   <h1>Interesse:</h1>
                                                   <p>${Math.round(Account.addinterest())}%</p>
                                                   <h1>Transazioni:</h1>
                                                   <p>${CurrentAccount.transactions}</p>`;
    console.log(Account.saldo);
    console.log(Account.addinterest());
}
