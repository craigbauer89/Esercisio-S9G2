document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.container button');
    if (btn !== null) {
        btn.addEventListener('click', aggiorna);
    }
    })

let num_1: number;
let num_2: number;

class CurrentAccount {

    static transactions:number;
    public name:string;
    public bank:string;
    public saldo:number;
    public interesse:number;

    constructor(name:string,bank:string,saldo:number,interesse:number ) {
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
    public addinterest():number {
        return this.saldo*this.interesse;
    }

    public balance(versamento:number, prelievio:number):number {
        return this.saldo + versamento - prelievio;
    }
    
    
}



class Son extends CurrentAccount {
    constructor(name:string,bank:string,saldo:number,interesse:number ) {
        super(name,bank,saldo,interesse);


    }

}

let Account = new Son("Craig", "Bofa",0,.1)



function aggiorna() {
    let versamento=<HTMLInputElement>document.querySelector('.container input[name="versamento"]');
    let prelievio=<HTMLInputElement>document.querySelector('.container input[name="prelievo"]');
   
        CurrentAccount.transactions++
        num_1 =+ versamento.value;
        num_2 =+ prelievio.value;
 
        
        Account.saldo = Account.balance(num_1,num_2);
    
    document.querySelector('.conto')?.innerHTML = `<h1>Conto Nome:</h1>
                                                   <p>${Account.name}</p>
                                                   <h1>Saldo:</h1>
                                                   <p>€${Account.saldo}</p>
                                                   <h1>Interesse:</h1>
                                                   <p>${Math.round(Account.addinterest())}%</p>
                                                   <h1>Transazioni:</h1>
                                                   <p>${CurrentAccount.transactions}</p>`
    console.log(Account.saldo);
    console.log(Account.addinterest());

}



