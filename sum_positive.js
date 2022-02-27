let input = [
    '3',
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function sum_sequence(n){  
    return n*(n+1)/2;
}

let n = +gets(0);
print(n);
print(sum_sequence(n));