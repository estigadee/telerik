let input = [
    '2, 3, 1',
    '5, 2, 3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let r1 = gets(input, 0);
let r2 = gets(input, 1);

r1 = r1.split(', ');
r2 = r2.split(', ');

let len = r1.length;
let new_arr = [];
let k = 0;
let u = 1;

for(let i = 0; i < len; i++){
    new_arr[k] = r1[i];
    new_arr[u] = r2[i];
    k+=2;
    u+=2;
}
new_arr = new_arr.join(',');
print(new_arr);
