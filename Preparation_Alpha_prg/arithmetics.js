let input = [
    '7',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function sum(a, b){
    return a+b;
}

function prod(a, b){
    return a*b;
}

function subtract(a, b){
    return b-a;
}

function reminder(a, b){
    return a%b;
}

function pow(a, b){
    for (let i = 1; i<b; i++)
    {
        a = a*a;
    }
    return a;
}

let n = [];
let len = input.length;
for (let i = 0; i < len; i++){
    n[i] = +gets(input, i);
}

print(sum(n[0], n[1]));
print(subtract(n[0], n[1]));
print(prod(n[0], n[1]));
print(reminder(n[0], n[1]));
print(Math.pow(n[0], n[1]));