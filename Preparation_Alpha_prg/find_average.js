let input = [
    '3',
    '2.5',
    '1.25',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function validate_input(len, input) {
    if(len < 1 && len >1000){
        return false
    }
    let k = 0;
    for(let i = 1; i<= len; i++){
        k = +gets(input, i);
        if(k < -1000 && k >1000){
            return false;
        }
    }
}

let n = +gets(input, 0);
let min = 0;
let max = 0;
let sum = 0;

let k = 0;

for (let i = 1; i <= n; i++) {
    k = +gets(input, i);
    if(i == 1){
        min = k;
    }
    sum += k;
    if (min >= k) {
        min = k;
    } 
    if(max <= k) {
        max = k;
    }
}

let avg = Math.abs(sum/n);

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${avg.toFixed(2)}`);