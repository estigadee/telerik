let input = [
    '10',
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let HALF_LITTER = 0.1;
let LITTER = 0.25;

let n = +gets(input, 0);
let m = +gets(input, 1);

let sum = n*HALF_LITTER + m*LITTER;
if (sum > 0){
    sum = sum.toPrecision(3);
}else{
    sum = sum.toPrecision(2);
}
print(sum);