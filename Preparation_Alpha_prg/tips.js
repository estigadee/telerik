let input = [
    '10',
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const TIP_PERCENT = 0.1;

let meal_price = +gets();

let total_pay = meal_price*TIP_PERCENT + meal_price;
print(total_pay);
