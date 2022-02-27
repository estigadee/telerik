let input = [
    '275',
    '693',
    '110',
    '742',
];
     
const MAX_LEN_OF_DIGITS = 3;
const MAX_NUMS_ALLOWED = 1000;

let print = this.print || console.log;

function check_lenght(num, max_len){
    return num.length >= max_len
}

function is_balanced(num){

    num = num.split('');
    num = num.map(Number);
    
    return (num[1] === (num[0]+num[2])); 
}

let input_len = input.length;
let sum = 0;

if(input_len > MAX_NUMS_ALLOWED){
    return;
}

for (let i = 0; i < input_len; i++){
    let gets = this.gets || ((arr, index) => () => arr[index++])(input, i);
    let N = gets();
    
    if(!check_lenght(N, MAX_LEN_OF_DIGITS)){
        return;
    }
    
    if(is_balanced(N)){
        sum += Number(N);
    }
}
print(sum);    
