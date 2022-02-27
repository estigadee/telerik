let input = [
    '100'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const INTEREST_PERCENTAGE = 0.05;

function calc_interest(n){
    let diff = INTEREST_PERCENTAGE*n;
    return diff;
}

let n = +gets(input, 0);
let final_sum = 0;
for(let i = 0; i <=3; i++){
    final_sum = Number((n+calc_interest(n)));
    print(final_sum.toFixed(2));
    n = final_sum;
}