let input = [
    '18'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

n = +gets();
let arr = [];
let k = 0;
for (let i = 1; i <= n; i++) {
    if ((i % 7 != 0) && (i % 3 != 0)) {
        arr[k] = i;
        k++;
    }
}
print(`${arr.join(' ')}`);