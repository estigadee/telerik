let input = [
    '2',
    '50',
    '40'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function calc_discount(price){
    let discount = price - (price*0.65);
    print(discount.toFixed(2));
}

let n = +gets(input, 0);
for(let i = 1; i <= n; i++){
    let k = +gets(input, i);
    calc_discount(k);
}