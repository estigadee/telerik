let input = [
    '2346'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function digit_sum(n){
    let sum = 0;
    print(`N = ${n}`)
    if(n< 10){
        return n;
    }else{
        while(n >= 10){
            sum = sum + (n%10);
            n = parseInt(n/10);
            print(`Sum = ${sum}`);
            print(`n = ${n}`);
            if(n < 10){
                sum = sum + n;
            }
        }
    }
    return sum;
}

let n = +gets();
print(digit_sum(n));
print(Math.floor(5.15));