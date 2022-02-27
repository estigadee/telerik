let input = [
    '123.45',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = gets();
let len = n.length;
let reversed = '';

for(let i = len -1; i>= 0; i--){
    reversed += n[i];
}
print(reversed);
