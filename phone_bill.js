let input = [
    '31',
    '61'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const FREE_MINS = 60;
const FREE_MESS = 20;

function additional_mess(total_mess){
    let add_mess = 0
    let mess_tax = 0.00;

    if(total_mess > FREE_MESS){
        add_mess = total_mess - FREE_MESS;
        mess_tax = (add_mess*0.06).toFixed(2);    
    }
    print(`${add_mess} additional messages for ${mess_tax} levas`);
    return Number(mess_tax);
}

function additional_mins(total_mins){
    let add_mins = 0
    let mins_tax = 0.00;

    if(total_mins > FREE_MINS){
        add_mins = total_mins - FREE_MINS;
        mins_tax = (add_mins*0.10).toFixed(2);    
    }

    print(`${add_mins} additional minutes for ${mins_tax} levas`);
    return Number(mins_tax);
}

function additional_taxes(mins_tax, mess_tax){
    let add_tax = 0.00;
    add_tax = mins_tax+mess_tax;
    add_tax = (add_tax*0.20).toFixed(2);
    print(`${add_tax} additional taxes`);
    return Number(add_tax);
}

function total_bill(plan_price, mess_tax, mins_tax, taxes){
    let total = 0.00;
    total = (plan_price+mess_tax+mins_tax+taxes).toFixed(2);
    print(`${total} total bill`);
}

let total_mess = +gets(input, 0);
let total_mins = +gets(input, 1);
let mess_tax = 0;
let mins_tax = 0;
let add_tax = 0;

mess_tax = additional_mess(total_mess);
mins_tax = additional_mins(total_mins);
add_tax = additional_taxes(mess_tax, mins_tax);
total_bill(12.00, mess_tax, mins_tax, add_tax);